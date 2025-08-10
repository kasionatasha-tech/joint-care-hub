// scripts/contentful-migrate.cjs
const contentful = require('contentful-management');
const fs = require('fs');
const path = require('path');

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENV_ID = process.env.CONTENTFUL_ENVIRONMENT || 'master';
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

function toRichText(text) {
  return {
    nodeType: 'document',
    data: {},
    content: [{
      nodeType: 'paragraph',
      data: {},
      content: [{ nodeType: 'text', value: text || '', marks: [], data: {} }]
    }]
  };
}

async function ensureContentType(env) {
  const id = 'page';
  try {
    // If it exists, just use it
    return await env.getContentType(id);
  } catch {
    // If you create it from scratch, match your current model:
    const ct = await env.createContentTypeWithId(id, {
      name: 'Page',
      fields: [
        { id: 'title', name: 'Title', type: 'RichText', required: true },
        { id: 'slug', name: 'Slug', type: 'Symbol', required: true, validations: [{ unique: true }] },
        { id: 'body', name: 'Body', type: 'RichText' },
        { id: 'heroImage', name: 'Hero Image', type: 'Link', linkType: 'Asset' }
      ]
    });
    return await ct.publish();
  }
}

async function upsertAsset(env, url, title) {
  if (!url) return null;
  const fileName = url.split('/').pop() || 'image.jpg';
  const asset = await env.createAsset({
    fields: {
      // Asset title must be a string (Symbol), not RichText
      title: { 'en-US': title || fileName },
      file: { 'en-US': { contentType: 'image/jpeg', fileName, upload: url } }
    }
  });
  const processed = await asset.processForAllLocales();
  return await processed.publish();
}

async function upsertEntry(env, page) {
  const hero = await upsertAsset(env, page.heroImageUrl, `${page.title} hero`);

  // IMPORTANT: title is RichText in your model
  const fields = {
    title: { 'en-US': toRichText(page.title) },
    slug:  { 'en-US': page.slug },
    body:  { 'en-US': toRichText(page.body || '') }
  };
  if (hero) {
    fields.heroImage = { 'en-US': { sys: { type: 'Link', linkType: 'Asset', id: hero.sys.id } } };
  }

  const existing = await env.getEntries({ content_type: 'page', 'fields.slug': page.slug, limit: 1 });
  if (existing.items.length) {
    const entry = existing.items[0];
    entry.fields = fields;
    const updated = await entry.update();
    return await updated.publish();
  } else {
    const entry = await env.createEntry('page', { fields });
    return await entry.publish();
  }
}

async function run() {
  if (!SPACE_ID || !TOKEN) throw new Error('Missing Contentful env vars');
  const client = contentful.createClient({ accessToken: TOKEN });
  const space = await client.getSpace(SPACE_ID);
  const env = await space.getEnvironment(ENV_ID);

  await ensureContentType(env);

  const dataPath = path.join(process.cwd(), 'scripts', 'data', 'pages.json');
  const pages = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  for (const p of pages) {
    console.log('Upserting:', p.slug);
    await upsertEntry(env, p);
  }
  console.log('Done');
}

run().catch(err => { console.error(err); process.exit(1); });

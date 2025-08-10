import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: import.meta.env.VITE_CONTENTFUL_CDA_TOKEN!,
});

type PageFields = {
  pageTitle?: string;        // short text (required in your model)
  title?: Document;          // rich text
  slug: string;
  body?: Document;           // rich text
  heroImage?: any;
};

export default function CMSPage({ slug: forcedSlug }: { slug?: string }) {
  const params = useParams();
  const slug = forcedSlug ?? params.slug ?? "home";

  const [entry, setEntry] = useState<{ fields: PageFields } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await client.getEntries<{ fields: PageFields }>({
          content_type: "page",
          "fields.slug": slug,
          limit: 1,
        });
        if (mounted) setEntry(res.items[0] ?? null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  if (loading) return <div className="p-6">Loading…</div>;
  if (!entry) return <div className="p-6">Not found</div>;

  const f = entry.fields;
  const hero = f.heroImage?.fields?.file?.url
    ? (f.heroImage.fields.file.url.startsWith("http")
        ? f.heroImage.fields.file.url
        : "https:" + f.heroImage.fields.file.url)
    : null;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-4">{f.pageTitle ?? slug}</h1>
      {hero && <img src={hero} alt={f.pageTitle ?? slug} className="mb-4 rounded-xl" />}
      {f.title && <div className="prose mb-6">{documentToReactComponents(f.title)}</div>}
      {f.body && <div className="prose">{documentToReactComponents(f.body)}</div>}
    </main>
  );
}

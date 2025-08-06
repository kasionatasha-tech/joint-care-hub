-- Enable Row Level Security on blog_posts table
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to blog posts
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create function to get blog posts if it doesn't exist
CREATE OR REPLACE FUNCTION public.get_blog_posts()
RETURNS SETOF public.blog_posts AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.blog_posts
  ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
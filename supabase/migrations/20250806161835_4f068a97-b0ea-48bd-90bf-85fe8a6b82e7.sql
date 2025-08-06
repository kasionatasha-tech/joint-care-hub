-- Drop the existing policy and create a proper one for the bloc table
DROP POLICY IF EXISTS "Blog posts are publicly readable" ON public.bloc;
CREATE POLICY "Bloc posts are publicly readable" 
ON public.bloc 
FOR SELECT 
USING (true);

-- Set search path for the function to be immutable
DROP FUNCTION IF EXISTS public.get_blog_posts();
CREATE OR REPLACE FUNCTION public.get_blog_posts()
RETURNS SETOF public.blog_posts 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.blog_posts
  ORDER BY created_at DESC;
END;
$$;
-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to blog posts
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create function to get blog posts
CREATE OR REPLACE FUNCTION public.get_blog_posts()
RETURNS SETOF public.blog_posts AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.blog_posts
  ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert sample blog post
INSERT INTO public.blog_posts (title, content, image_url) VALUES 
('Здоров''я суглобів: основи профілактики', 
 'Суглоби відіграють ключову роль у нашому повсякденному житті. Правильна профілактика допомагає зберегти їх здоров''я на довгі роки. У цій статті ми розглянемо основні принципи догляду за суглобами, включаючи правильне харчування, фізичні вправи та режим дня.',
 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop');
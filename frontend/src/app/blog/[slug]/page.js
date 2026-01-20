export async function generateMetadata({ params }) {
  // Fetch your blog post data
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Israel Otamere"],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },

    alternates: {
      canonical: `https://dycoder.space/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Israel Otamere",
      url: "https://dycoder.space",
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    image: post.coverImage,
    publisher: {
      "@type": "Person",
      name: "Israel Otamere",
    },
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}

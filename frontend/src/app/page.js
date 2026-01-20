import Home from "../pages/Home";

import Script from "next/script";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Israel Otamere",
    alternateName: ["DyCoder", "DyCoderx"],
    url: "https://dycoder.space",
    image: "https://dycoder.space/israel-otamere-profile.jpg",
    sameAs: [
      "https://github.com/Dynamic323",
      "https://www.linkedin.com/in/israel-otamere-304590294",
      "https://x.com/dy_coder_",
      "https://clutch.co/profile/dycoder-israel-otamere",
      "https://dev.to/dycoder",
      "https://medium.com/@israelotamere",
    ],
    jobTitle: "Software Engineer & Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "CocoBase",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Benin City",
      addressRegion: "Edo State",
      addressCountry: "Nigeria",
    },
    alumniOf: {
      "@type": "Organization",
      name: "University of Benin",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PHP",
      "Laravel",
      "Full-Stack Development",
      "Web Development",
      "Embedded Systems",
    ],
  };
  return (
    <main>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </main>
  );
}

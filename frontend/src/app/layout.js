import "./globals.css";
import "./App.css";
import ParticleBackground from "../ParticleBackground";
import Layout from "../components/Layout";
import Script from "next/script";
import VisitorNotifier from "../components/VisitorNotifier";
import { AlertContainer, coco_Alert } from "coco-alert/react";

export const metadata = {
  metadataBase: new URL("https://dycoder.space"),

  title: {
    default: "Israel Otamere (DyCoder) - Full-Stack Software Engineer",
    template: "%s | Israel Otamere (DyCoder)",
  },

  description:
    "Israel Otamere (DyCoder), Software Engineer and Full-Stack Developer building premium, scalable web applications. Available for freelance and contract work in Nigeria.",

  icons: {
    icon: "/images/dp-removebg-preview.png",
  },
  keywords: [
    "Who is Israel Otamere ",
    "Who is Israel Otamere | Dycoder",
    "Israel Otamere",
    "DyCoder",
    "DyCoderx",
    "Software Engineer Nigeria",
    "Full-Stack Developer",
    "Web Developer Benin City",
    "React Developer Nigeria",
    "Next.js Developer",
    "UNIBEN Developer",
    "Best Developer UNIBEN",
    "CocoBase",
    "Freelance Developer Nigeria",
  ],

  authors: [{ name: "Israel Otamere", url: "https://dycoder.space" }],

  creator: "Israel Otamere",
  publisher: "Israel Otamere",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dycoder.space",
    siteName: "Israel Otamere (DyCoder)",
    title: "Israel Otamere (DyCoder) - Full-Stack Software Engineer",
    description:
      "Software Engineer building premium, scalable web applications and embedded systems.",
    images: [
      {
        url: "/dp.jpeg", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Israel Otamere - Full-Stack Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Israel Otamere (DyCoder) - Full-Stack Software Engineer",
    description:
      "Building premium web applications with React, Next.js, Node.js, and Laravel",
    creator: "@dy_coder_",
    images: ["/dp.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://dycoder.space",
  },

  verification: {
    google: "dBd045uWSYFp3xxTapoxs-qlxsM_ZaIsQR_JG4ZPCYo",
    yandex: "6bbc4fbfc06af32b",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/dp-removebg-preview.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/css/ionicons.min.css"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <VisitorNotifier />
        <ParticleBackground />
        <AlertContainer />

        <Layout>{children}</Layout>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="lazyOnload"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

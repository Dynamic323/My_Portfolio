
import "./globals.css";
import "./App.css";
import ParticleBackground from "../ParticleBackground";
import Layout from "../components/Layout";
import Script from "next/script";

export const metadata = {
    title: "Dys-Portfolio",
    description: "Portfolio of Dy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/avarta_profile.png" type="image/x-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/css/ionicons.min.css" />
            </head>
            <body>
                <ParticleBackground />
                <Layout>
                    {children}
                </Layout>
                <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" strategy="lazyOnload" />
                <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}

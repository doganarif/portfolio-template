import Script from "next/script";
import config from "@/config.json";
import "./globals.css";

export const metadata = {
  title: config.seo?.title || "Portfolio",
  description: config.seo?.description || "Personal Portfolio",
  keywords: config.seo?.keywords || "",
  authors: [{ name: config.personal?.name || "Your Name" }],
  openGraph: {
    title: config.seo?.title || "Portfolio",
    description: config.seo?.description || "Personal Portfolio",
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {config.analytics?.enabled && config.analytics?.googleAnalyticsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${config.analytics.googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
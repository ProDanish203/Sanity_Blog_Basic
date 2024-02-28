import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "BloggerDS | Sanity.IO",
  description: "Blog website created with the help of Sanity.IO as headless CMS as a content manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen bg-bg">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Metadata, Viewport } from "next";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});
export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  title: "SPACE.",
  description: "My first next js project",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Space", "spacex", "nasa", "moon"],
  authors: [
    { name: "Sam" },
    { name: "Josh", url: "https://www.pemudaremajagkbi.site" },
  ],
  creator: "sAm",
  publisher: "sAm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.pemudaremajagkbi.site"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SPACE.BLOG",
    description: "SPACEBLOG",
    url: "https://www.pemudaremajagkbi.site",
    siteName: "SPACE.BLOG",
    images: [
      {
        url: "/Practicing_Our_Moonwalk.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/Practicing_Our_Moonwalk.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "SPACE.BLOG",
    description: "First Project",
    card: "summary_large_image",
    images: "/Practicing_Our_Moonwalk.jpg",
    site: "https://www.pemudaremajagkbi.site",
  },
  category: "blog",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black selection:bg-black">
        <div className="min-h-[100vh] flex flex-col justify-between">
          <Header />
          <div>
            <Toaster />
          </div>
          {props.children}
          {props.modal}
          <Suspense fallback={<Loading />}></Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}

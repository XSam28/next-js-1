import "./globals.css";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "SPACE_BLOG",
  description: "Nasa API",
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

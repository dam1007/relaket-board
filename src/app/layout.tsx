import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from 'next/font/google';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import '@/styles/layout.css';

export const metadata: Metadata = {
  title: "Relaket Board",
  description: "Next.js 샘플 프로젝트입니다.",
};

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  variable: '--font-noto-sans-kr',
});

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${notoSansKR.className}`}>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

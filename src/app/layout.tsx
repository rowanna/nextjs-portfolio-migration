import type { Metadata } from "next";
import { Abel, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

import "the-new-css-reset/css/reset.css";
import "@/app/styles/globals.css";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
});
const bedini = localFont({
  src: "../public/fonts/Bedini/Bedini-Bold-Italic.ttf.woff",
});

const maruburi = localFont({
  src: "../public/fonts/MaruBuri/MaruBuri-Regular.woff",
});

export const metadata: Metadata = {
  title: "rowanna porfolio 2020",
  description: "next.js로 업데이트 한 jQuery 포트폴리오 입니다.",
  keywords:
    "나원지, 포트폴리오, portfolio, rowanna, 웹퍼블리셔, 웹퍼블리셔 포트폴리오",
  icons: {
    icon: "/favicon-128.jpg",
  },
  openGraph: {
    title: "Wonji Na Portfolio",
    description: "웹 퍼블리셔 나원지의 포트폴리오 사이트입니다.",
    images: "/meta-img.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfairDisplay.className} ${bedini.className} ${maruburi.className} ${abel.className}`}
      >
        {children}
      </body>
    </html>
  );
}

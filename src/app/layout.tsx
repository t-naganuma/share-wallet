import SideNav from "@/ui/common/sideNav";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notosansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Share Wallet",
  description: "家族で共有する家計簿アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${notosansJP.className} text-black`}>
        <div className='flex h-screen overflow-hidden'>
          <SideNav />
          <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-surface'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

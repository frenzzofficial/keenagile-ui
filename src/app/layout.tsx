import "@/styles/globals.css";
import { poppins, inter } from "@/packages/configs/config.styles";
import LayoutProvider from "@/components/providers/LayoutProvider";

import { Metadata } from "next";
import HomePageSEO from "@/packages/seo/seo.index";
export const metadata: Metadata = HomePageSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased relative scroll-smooth`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

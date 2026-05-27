import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal POP OUT App",
  description: "Premium brand visibility command center by Crystal Branding Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

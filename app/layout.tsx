import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday, Mom! — From Your Children",
  description: "A birthday surprise filled with love from the kids to their amazing Mom.",
  openGraph: {
    title: "Happy Birthday!",
    description: "From your children, with love",
    images: [
      {
        url: "https://birthday-surprise-for-a-friend.automations673703.chatgpt.site/og.png",
        width: 1728,
        height: 907,
        alt: "Happy Birthday — From your children, with love",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday!",
    description: "From your children, with love",
    images: ["https://birthday-surprise-for-a-friend.automations673703.chatgpt.site/og.png"],
  },
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

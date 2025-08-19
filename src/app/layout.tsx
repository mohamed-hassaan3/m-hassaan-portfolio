import type { Metadata } from "next";
import { Geist_Mono, Averia_Libre } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import NextTopLoader from "nextjs-toploader";

const michome = Averia_Libre({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m-hassaan-portfolio.vercel.app"),
  title: {
    default: "Frontend Engineer | Mohamed Hassaan",
    template: "%s | Mohamed Hassaan",
  },
  description:
    "I'm  Mohamed, and I work with brands  globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.",
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    siteName: "Mohamed Hassaan Portfolio",
    type: "website",
    url: "https://m-hassaan-portfolio.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dx14mtfkw/image/upload/v1754750139/logo/logo-web_qmfbad.webp",
        width: 800,
        height: 600,
      },
    ],
  },
  keywords: [
    "Frontend Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Restful API",
    "Jest",
    "CMS",
    "AI"
  ],
  authors: [
    { name: "Mohamed Hassaan", url: "https://m-hassaan-portfolio.vercel.app/" },
  ],
  creator: "Mohamed Hassaan",
  publisher: "Mohamed.H",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <meta
        name="viewport"
      />
      <body
        className={`${michome.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#b5ff6d" showSpinner={false} />
          {children}
          <div className="fixed bottom-0 left-0 right-0 h-[100px] dark:bg-gradient-to-t dark:from-neutral-950 to-transparent"></div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

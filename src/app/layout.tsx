import type { Metadata } from "next";
import { Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import NextTopLoader from "nextjs-toploader";

const michome = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Egineer | Mohamed Hassaan",
    template: "%s | Mohamed Hassaan",
  },
  description:
    "Mohamed as a Frontend Engineer, Passionate about clean, accessible design and building fast, scalable web apps with modern technologies, decreasing server load by 25%. Skilled in Docker CI/CD workflows, Prisma, and performance optimization, ensuring robust application design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* prevent zooming in mobile screen */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
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

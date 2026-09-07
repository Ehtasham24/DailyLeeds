import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { NavigationProvider } from "@/components/NavigationProvider";
import NavSpinnerOverlay from "@/components/NavSpinnerOverlay";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DailyLeads — Local leads, delivered daily",
    template: "%s — DailyLeads",
  },
  description:
    "Done-for-you local lead generation for plumbers, electricians and cleaners. At least one qualified customer lead a day — ads run on your own page.",
  openGraph: {
    title: "DailyLeads — Local leads, delivered daily",
    description:
      "Done-for-you lead generation for plumbers, electricians and cleaners. You do the jobs, we keep your phone ringing.",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.3 7.5 12.5 7.5 12.5s7.5-7.2 7.5-12.5C19.5 5.4 16.1 2 12 2z' fill='%231BB47A'/><circle cx='12' cy='9.5' r='3' fill='white'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-light font-sans text-ink antialiased">
        <NavigationProvider>
          <ScrollProgress />
          <NavSpinnerOverlay />
          <Nav />
          <PageTransition>{children}</PageTransition>
        </NavigationProvider>
      </body>
    </html>
  );
}

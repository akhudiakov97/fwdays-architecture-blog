
import { Inter } from "next/font/google";
import Link from "next/link"; // Import Link component
import "./globals.css";
import { Search } from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FwDays Architecture",
  description: "Chapter-1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold">
              FwDays Architecture
            </Link>
            <nav>
              <Link href="/movies" className="hover:underline">
                Movies
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex h-full">
          <Search />
          <div className="w-4/5">{children}</div>
        </main>
      </body>
    </html>
  );
}
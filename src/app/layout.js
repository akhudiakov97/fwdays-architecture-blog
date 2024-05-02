import { Inter } from "next/font/google";
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
        <main className="flex h-full">
          <Search />
          <div className="w-4/5">{children}</div>
        </main>
      </body>
    </html>
  );
}

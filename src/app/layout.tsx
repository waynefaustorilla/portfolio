import NavigationBar from "@/components/NavigationBar";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

config.autoAddCss = false;

library.add(fas);
library.add(fab);

export const metadata: Metadata = {
  title: "Orlie Wayne A. Faustorilla",
  description: "Some catchy tagline here.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
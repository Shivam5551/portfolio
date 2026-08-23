import CustomCursor from "@/components/customCursor";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning className={cn("font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          <CustomCursor/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
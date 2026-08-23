import CustomCursor from "@/components/customCursor";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { user } from "@/details";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: `${user.firstName} ${user.lastName} | Portfolio`,
  description: `${user.description}`,
};


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
    <head>
      <link rel="icon" href="/fav.png" type="image/x-icon" />
    </head>
      <body>
        <ThemeProvider>
          <CustomCursor/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
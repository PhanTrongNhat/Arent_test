import clsx from "clsx";
import "./globals.css"; // hoặc './globals.css' nếu nằm cùng cấp
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter", // tạo biến CSS để Tailwind dùng
});

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-playfair",
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"], // hoặc ["100", "300", "400", "500", "700", "900"]
//   display: "swap",
//   variable: "--font-roboto", // để dùng với Tailwind (nâng cao)
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={clsx("scrollbar-hidden", inter.variable)}>
        {children}
      </body>
    </html>
  );
}

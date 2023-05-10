import Provider from "./Provider";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <title>Digital-Money-House</title>
      </head>

      <body className={openSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

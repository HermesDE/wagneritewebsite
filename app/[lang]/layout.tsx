import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import Navbar from "@/Components/Navigation/Navbar";
import { getDictionary } from "@/lib/dictionaries";
import { Lang } from "@/types/lang";
import DictionaryProvider from "@/Context/DictionaryContext";
import Theme from "@/Components/Mantine/Theme";

export const metadata: Metadata = {
  title: "Valentin Wagner IT-Engineering",
  description: "Homepage of Valentin Wagner IT-Engineering",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <html lang={params.lang}>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"
          />
        </head>
        <body>
          <DictionaryProvider dictionary={dictionary}>
            <Theme>
              <Navbar>{children}</Navbar>
            </Theme>
          </DictionaryProvider>
        </body>
      </html>
    </>
  );
}

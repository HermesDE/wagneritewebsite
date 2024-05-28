import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import Navbar from "@/Components/Navigation/Navbar";

import { getDictionary } from "@/lib/dictionaries";
import { Lang } from "@/types/lang";
import DictionaryProvider from "@/Context/DictionaryContext";

export const metadata: Metadata = {
  title: "Valentin Wagner IT-Engineering",
  description: "Homepage of Valentin Wagner IT-Engineering",
};

const theme = createTheme({
  fontFamily: "Verdana, sans-serif",
  headings: { fontFamily: "Verdana, sans-serif" },
  colors: {
    purple: [
      "#f2f0ff",
      "#e0dff2",
      "#bfbdde",
      "#9b98ca",
      "#7d79ba",
      "#6a65b0",
      "#605bac",
      "#504c97",
      "#464388",
      "#3b3979",
    ],
  },
  primaryColor: "purple",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <DictionaryProvider dictionary={dictionary}>
          <ColorSchemeScript defaultColorScheme="dark" />
          <MantineProvider defaultColorScheme="dark" theme={theme}>
            <Navbar>{children}</Navbar>
          </MantineProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}

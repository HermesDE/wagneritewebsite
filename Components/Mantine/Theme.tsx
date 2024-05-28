"use client";

import {
  Card,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import React from "react";

export default function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    fontFamily: "Verdana, sans-serif",
    headings: { fontFamily: "Verdana, sans-serif" },
    colors: {
      purple: [
        "#f1f3f9",
        "#e0e4ec",
        "#bec6d9",
        "#98a7c7",
        "#798cb8",
        "#657baf",
        "#5b73ac",
        "#4b6197",
        "#415687",
        "#354a79",
      ],
    },
    primaryColor: "purple",
    components: {
      Card: Card.extend({
        styles: {
          root: {
            backgroundColor: "#353579",
          },
        },
      }),
    },
  });

  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {children}
      </MantineProvider>
    </>
  );
}

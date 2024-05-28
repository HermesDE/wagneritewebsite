"use client";

import { useDictionary } from "@/Context/DictionaryContext";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function NavButtons() {
  const dict = useDictionary();

  return (
    <>
      <Button component={Link} href={"/"}>
        {dict.navigation.header.navButtons.home}
      </Button>
      <Button component={Link} href={"/legal-notice"}>
        {dict.navigation.header.navButtons.legal_notice}
      </Button>
      <Button
        component={"a"}
        href={"https://github.com/HermesDE"}
        target="_blank"
        rel="noreferrer"
        leftSection={<i className="ci ci-github-light ci-1x" />}
      >
        Github
      </Button>
    </>
  );
}

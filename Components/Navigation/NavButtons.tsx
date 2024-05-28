"use client";

import { useDictionary } from "@/Context/DictionaryContext";
import { NavButtonType } from "@/types/Navigation/navButton";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function NavButtons() {
  const dict = useDictionary();

  const navs: NavButtonType[] = [
    { name: dict.navigation.header.navButtons.home, link: "/" },
    { name: dict.navigation.header.navButtons.projects, link: "/projects" },
    {
      name: dict.navigation.header.navButtons.legal_notice,
      link: "/legal-notice",
    },
  ];

  return navs.map((nav) => <NavButton key={nav.name} nav={nav} />);
}

function NavButton({ nav }: { nav: NavButtonType }) {
  return (
    <Button component={Link} href={nav.link}>
      {nav.name}
    </Button>
  );
}

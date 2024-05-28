"use client";
import { AppShell, Burger, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavButtons from "./NavButtons";
import Link from "next/link";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        withBorder={false}
        styles={{ header: { backgroundColor: "#111827" } }}
      >
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group
            justify="space-between"
            align="flex-start"
            style={{ flex: 1, width: "80%" }}
          >
            <Text component={Link} href={"/"} truncate="end" size={"xl"}>
              Valentin Wagner IT-Engineering
            </Text>
            <Group ml="xl" gap={"md"} visibleFrom="sm">
              <NavButtons />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        styles={{ navbar: { backgroundColor: "#111827" } }}
        py="md"
        px={4}
      >
        <Stack>
          <NavButtons />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main styles={{ main: { backgroundColor: "#111827" } }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

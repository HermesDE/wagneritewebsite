"use client";

import { useDictionary } from "@/Context/DictionaryContext";
import { Container, Grid, Title } from "@mantine/core";

export default function Projects() {
  const dict = useDictionary();

  return (
    <Container>
      <Grid>
        <Grid.Col>
          <Title>{dict.projects.title}</Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

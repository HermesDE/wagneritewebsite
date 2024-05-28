"use client";
import { useDictionary } from "@/Context/DictionaryContext";
import { Container, Grid, Title } from "@mantine/core";

export default function Home() {
  const dict = useDictionary();

  return (
    <Container fluid>
      <Grid>
        <Grid.Col>
          <Title>{dict.home.title}</Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

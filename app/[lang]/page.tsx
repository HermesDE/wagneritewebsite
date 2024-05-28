"use client";
import Projects from "@/Components/Projects/Projects";
import { useDictionary } from "@/Context/DictionaryContext";
import { Card, Container, Grid, Text, Title } from "@mantine/core";

export default function Home() {
  const dict = useDictionary();

  return (
    <>
      <Container>
        <Grid>
          <Grid.Col>
            <Title>{dict.home.title}</Title>
          </Grid.Col>
        </Grid>
        <Grid mt={50}>
          <Grid.Col>
            <Text>{dict.home.about}</Text>
          </Grid.Col>
        </Grid>
      </Container>
      <Projects />
    </>
  );
}

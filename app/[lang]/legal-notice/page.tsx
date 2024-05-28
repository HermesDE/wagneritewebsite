"use client";

import { useDictionary } from "@/Context/DictionaryContext";
import { Container, Grid, Text, Title } from "@mantine/core";

export default function LegalNotice() {
  const dict = useDictionary();

  return (
    <Container>
      <Grid>
        <Grid.Col>
          <Title>{dict["legal-notice"].title}</Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Title order={3}>{dict["legal-notice"].information.title}</Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text>
            {dict["legal-notice"].information.informations
              .split("\n")
              .map((value, i) => (
                <Text key={i}>{value}</Text>
              ))}
          </Text>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Title order={4}>{dict["legal-notice"].contact.title}</Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text component="a" href="mailto:info@wagner-ite.de">
            {dict["legal-notice"].contact.mail}
          </Text>
        </Grid.Col>
      </Grid>
      <Grid mt={10}>
        <Grid.Col>
          <Title order={3}>{dict["legal-notice"].disclaimer}</Title>
        </Grid.Col>
      </Grid>
      <Grid mt={10}>
        <Grid.Col>
          <Title order={4}>
            {dict["legal-notice"].disclaimers.content.title}
          </Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text>{dict["legal-notice"].disclaimers.content.message}</Text>
        </Grid.Col>
      </Grid>

      <Grid mt={10}>
        <Grid.Col>
          <Title order={4}>
            {dict["legal-notice"].disclaimers.links.title}
          </Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text>{dict["legal-notice"].disclaimers.links.message}</Text>
        </Grid.Col>
      </Grid>

      <Grid mt={10}>
        <Grid.Col>
          <Title order={4}>
            {dict["legal-notice"].disclaimers.copyright.title}
          </Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text>{dict["legal-notice"].disclaimers.copyright.message}</Text>
        </Grid.Col>
      </Grid>

      <Grid mt={10}>
        <Grid.Col>
          <Title order={4}>
            {dict["legal-notice"].disclaimers.data_privacy.title}
          </Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <Text>{dict["legal-notice"].disclaimers.data_privacy.message}</Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

"use client";

import { ProjectType } from "@/types/project";
import { Card, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card
      h={"100%"}
      style={{ display: "flex", flexDirection: "column" }}
      p={"xl"}
    >
      <Group gap={0} justify="space-between">
        <Title order={3}>{project.name}</Title>
        <Group>
          {project.techstack.map((tech) => (
            <i className={`ci ci-${tech} ci-2x`} key={tech} />
          ))}
        </Group>
      </Group>
      <Grid mt={10} justify="center">
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <Image
            src={project.image}
            alt={`${project.name} image`}
            fit="contain"
            h={"auto"}
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <Stack h={"100%"} align="stretch" justify="space-between">
            <Text size="sm">{project.description}</Text>
            <Group>
              <Text
                td={"underline"}
                component="a"
                size="sm"
                href={project.websiteLink}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </Text>
              {project.githubLink && (
                <Text
                  td={"underline"}
                  component="a"
                  size="sm"
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Text>
              )}
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

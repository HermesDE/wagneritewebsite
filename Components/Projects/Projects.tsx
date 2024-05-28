"use client";

import { useDictionary } from "@/Context/DictionaryContext";
import { ProjectType } from "@/types/project";
import { Container, Grid, Title } from "@mantine/core";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const dict = useDictionary();

  const projects: ProjectType[] = [
    {
      name: "Case Clicker Online",
      image: "/images/cco.png",
      description: dict.projects.desciptions.caseclickeronline,
      websiteLink: "https://case-clicker.com",
      techstack: ["ts", "nextjs", "mongodb", "redis"],
    },
  ];

  return (
    <Container mt={100} fluid>
      <Grid>
        <Grid.Col>
          <Title order={2}>{dict.projects.title}</Title>
        </Grid.Col>
      </Grid>
      <Grid mt={20}>
        {projects.map((project) => (
          <Grid.Col key={project.name} span={{ xs: 12, lg: 6 }}>
            <ProjectCard project={project} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

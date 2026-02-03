import ProjectCard from "./ProjectCard";
import { PicCard } from "./types/PicCard";

import { Container, Row, Col } from 'react-bootstrap';

// Find Icons here: https://devicon.dev/
const LIBRETRACK: PicCard = {
  title: "LibreTrack",
  description: "Contributed to a FOSS, cross-platform package tracking app",
  languageIcons: ["devicon-flutter-plain"],
  backgroundPicURL: "https://raw.githubusercontent.com/proninyaroslav/libretrack/refs/heads/master/art/linux_screenshots/s1.png",
  url: "https://github.com/proninyaroslav/libretrack"
}
const DC_BOT: PicCard = {
  title: "Discord Bot",
  description: (<>Created a music bot using Discord's APIs, along with <code>discord.js</code> and other npm packages</>),
  languageIcons: ["devicon-nodejs-plain-wordmark", "devicon-mocha-plain"],
  url: "https://github.com/SaintKiri/tts-dc-bot"
}
const INDEX_TTS: PicCard = {
  title: "Index TTS",
  description: "Forked from its original. This is used in conjunction wtih FastAPI for my Discord Bot's TTS backend",
  languageIcons: ["devicon-python-plain", "devicon-fastapi-plain-wordmark"],
  url: "https://github.com/SaintKiri/index-tts"
}
const TARKOV_DEV_API: PicCard = {
  title: "Tarkov Prices",
  description: (<>Utilizing <a href="https://tarkov.dev/">tarkov.dev</a>'s GraphQL API, listing the prices of my favourite game items</>),
  languageIcons: ["devicon-go-original-wordmark", "devicon-vuejs-plain-wordmark", "devicon-wasm-original", "devicon-githubactions-plain-wordmark"],
  url: "https://saintkiri.github.io/goTarkovDevAPI/"
}
const PROJECTS: PicCard[] = [LIBRETRACK, DC_BOT, INDEX_TTS, TARKOV_DEV_API];

function ProjectsSection() {
  return (
    <Container className="py-5">
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {PROJECTS.map((pro) => (
          <Col key={pro.title} className="d-flex">
            <ProjectCard pro={pro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsSection;
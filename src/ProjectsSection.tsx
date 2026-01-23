import ProjectCard from "./ProjectCard";
import { PicCard } from "./types/PicCard";

import { Container, Row, Col } from 'react-bootstrap';

const LIBRETRACK: PicCard = {
  title: "LibreTrack",
  description: "Contributed to a FOSS, cross-platform package tracking app",
  languageIcons: ["devicon-flutter-plain"],
  backgroundPicURL: "https://raw.githubusercontent.com/proninyaroslav/libretrack/refs/heads/master/art/linux_screenshots/s1.png",
  gitURL: "https://github.com/proninyaroslav/libretrack"
}
const DC_BOT: PicCard = {
  title: "Discord Bot",
  description: (<>Created a music bot using Discord's APIs, along with <code>discord.js</code> and other npm packages</>),
  languageIcons: ["devicon-javascript-plain", "devicon-nodejs-plain-wordmark"],
  gitURL: "https://github.com/SaintKiri/tts-dc-bot"
}
const PROJECTS: PicCard[] = [LIBRETRACK, DC_BOT];

function ProjectsSection() {
  return (
    <Container className="py-5">
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {PROJECTS.map((pro) => (
          <Col key={pro.title} className="d-flex">
            <ProjectCard pro={pro}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsSection;
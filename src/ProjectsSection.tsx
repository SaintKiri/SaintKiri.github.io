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
const PROJECTS: PicCard[] = [LIBRETRACK];

function ProjectsSection() {
  return (
    <Container className="py-5">
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {PROJECTS.map((pro) => (
          <Col key={pro.title} className="d-flex">
            <ProjectCard pro={pro}></ProjectCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsSection;
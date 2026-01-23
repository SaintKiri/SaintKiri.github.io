import "@fontsource/quicksand"
import './App.scss'; // TODO: (Not priority) Refactor scss structure properly

import { Divider, IconButton } from '@mui/material';
import { GitHub, Description, LinkedIn } from '@mui/icons-material';

import Resume from './assets/resume_output.pdf';

import { InstagramEmbed } from 'react-social-media-embed';

import SiteNavigationBar from "./SiteNavigationBar";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <>
      <SiteNavigationBar />

      <div className="App">
        {/* TODO: 
        - Decide on a color theme, don't go monochrome
        - Think about what to add in the `Experience` section
        - MAKE PROGRESS ON PRESENTABLE PROJECTS
         */}

        <section id='home'>
          <div>
            <h1>Jack Song</h1>
            <Divider className="heading-divider" aria-hidden="true" />
            <p>I know a little about everything</p>

            <IconButton href={Resume}>
              <Description />
            </IconButton>
            <IconButton href="https://github.com/SaintKiri">
              <GitHub />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/jj-jack-song/">
              <LinkedIn />
            </IconButton>
          </div>

        </section>

        <section id='experience'>
          <div>
            <h2>Experience</h2>
            <Divider className="heading-divider" aria-hidden="true" />
            <ExperienceSection />
          </div>
        </section>

        <section id='projects'>
          <h2>Projects</h2>
          <Divider className="heading-divider" aria-hidden="true" />
          <ProjectsSection />
        </section>

        <section id='education'>
          <h2>Education</h2>
          <Divider className="heading-divider" aria-hidden="true" />
          <EducationSection />
          <div className="instagram-crop-wrapper">
            <div className="instagram-mask" style={{ '--mask-height': '270px' } as React.CSSProperties}>
              <InstagramEmbed url="https://www.instagram.com/p/C05VUrEOGfO/" width="100%" captioned={false} />
            </div>
            <div className="instagram-mask">
              <InstagramEmbed url="https://www.instagram.com/p/CnnukbWOwip/" width="100%" captioned={false} />
            </div>
          </div>
        </section>

        <section id='contact'>
          <h2 >Contact</h2>
          <Divider className="heading-divider" aria-hidden="true" />
          <p>Send me an email at <a href="mailto:jis110@pitt.edu">jis110@pitt.edu</a> and I will get back to you ASAP!</p>
        </section>
      </div>

      <footer>
        <p>Inspired by <a href="https://github.com/ClementTsang/clementtsang.github.io">Clement Tsang</a>. Designed and built by <a href="https://github.com/SaintKiri/SaintKiri.github.io">Jack Song</a></p>
      </footer>
    </>
  );
}

export default App;

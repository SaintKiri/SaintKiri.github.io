import "@fontsource/quicksand"
import './App.scss';

import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Resume from './assets/resume_output.pdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import SiteNavigationBar from "./SiteNavigationBar";

function App() {
  return (
    <>
      <SiteNavigationBar />

      <div className="App">
        {/* TODO: 
        - https://noaheakin.medium.com/changing-the-default-react-browser-tab-title-and-icon-1240239d92d3
        - Decide on a color theme, don't go monochrome
        - Think about what to add in the `Experience` section
        - MAKE PROGRESS ON PRESENTABLE PROJECTS
         */}

        <section id='summary'>
          <h1>Jack Song</h1>
          <Divider className="heading-divider" aria-hidden="true" />
          <p>I know a little about everything</p>

          <IconButton href={Resume}>
            <DescriptionIcon />
          </IconButton>
          <IconButton href="https://github.com/SaintKiri">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/jj-jack-song/">
            <LinkedInIcon />
          </IconButton>
        </section>

        <section id='experience'>
          <h2>Experience</h2>
          <Divider className="heading-divider" aria-hidden="true" />
        </section>

        <section id='projects'>
          <h2>Projects</h2>
          <Divider className="heading-divider" aria-hidden="true" />
        </section>

        <section id='education'>
          <h2>Education</h2>
          <Divider className="heading-divider" aria-hidden="true" />
        </section>

        <section id='contact'>
          <h2 >Contact</h2>
          <Divider className="heading-divider" aria-hidden="true" />
          <p>Send me an email at <a href="mailto:jis110@pitt.edu">jis110@pitt.edu</a> and I will get back to you ASAP!</p>
        </section>
      </div>

      <footer>
        <p>Inspired from <a href="https://github.com/ClementTsang/clementtsang.github.io">Clement Tsang</a>. Designed and built by <a href="https://github.com/SaintKiri/SaintKiri.github.io">Jack Song</a></p>
      </footer>
    </>
  );
}

export default App;

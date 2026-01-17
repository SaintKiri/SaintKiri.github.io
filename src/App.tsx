import './App.css';

import SiteNavigationBar from "./SiteNavigationBar";

function App() {
  return (
    <>
      <SiteNavigationBar />

      <div className="App">
        {/* TODO: 
        - Decide on a color theme, don't go monochrome
        - Add a colored divider to each section. between heading and its other elements
        - Think about what to add in the `Experience` section
        - MAKE PROGRESS ON PRESENTABLE PROJECTS
         */}

        <section id='experience'>
          <h1>Experience</h1>
        </section>

        <section id='projects'>
          <h1>Projects</h1>
        </section>

        <section id='contact'>
          <h1 >Contact</h1>
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

import ExperienceCard from './ExperienceCard';
import { SimpleCard } from './types/SimpleCard';

const INFOSYS: SimpleCard = {
  companyName: 'Infosys',
  date: 'Dec 2024 - Dec 2025',
  location: 'Indianapolis, IN',
  companyURL: [ 'Infosys', 'https://www.infosys.com/'],
  descriptionTitle: 'Associate',
  description: 'Futher trained in software development in making enterprise level code. Contributed to open-source projects when not on project/training. '
}
const REVATURE: SimpleCard = {
  companyName: 'Revature',
  date: 'Jun 2024 - Dec 2024',
  companyURL: ['Revature', 'https://www.revature.com/'],
  descriptionTitle: 'Associate',
  description: 'Trained in React, Java, Spring Boot, and PostgreSQL. Combined with Agile/scrum methology in a small team of 6 as the final project. '
}
const WORK_EXPERIENCES: SimpleCard[] = [INFOSYS, REVATURE];

function ExperienceSection() {
  return (
    /* TODO: (maybe) filter by relevant experience: swe, mechanic  */
    <>
      {WORK_EXPERIENCES.map((exp) => (
        <ExperienceCard key={exp.companyName} exp={exp}></ExperienceCard>
      ))}
    </>
  );
}

export default ExperienceSection;
import ExperienceCard from './ExperienceCard';
import type { TextCard } from './types/TextCard';

const INFOSYS: TextCard = {
  companyName: 'Infosys',
  date: 'Dec 2024 - Dec 2025',
  location: 'Indianapolis, IN',
  companyURL: [ 'Infosys', 'https://www.infosys.com/'],
  descriptionTitle: 'Associate',
  description: 'Futher trained in software development in making enterprise level code. Contributed to open-source projects when not on project/training. '
}
const REVATURE: TextCard = {
  companyName: 'Revature',
  date: 'Jun 2024 - Dec 2024',
  companyURL: ['Revature', 'https://www.revature.com/'],
  descriptionTitle: 'Associate',
  description: 'Trained in React, Java, Spring Boot, and PostgreSQL. Combined learned tools with Agile/scrum in a small team of 6 as the final project. '
}
const WORK_EXPERIENCES: TextCard[] = [INFOSYS, REVATURE];

function ExperienceSection() {
  return (
    <>
      {WORK_EXPERIENCES.map((exp) => (
        <ExperienceCard key={exp.companyName} exp={exp}></ExperienceCard>
      ))}
    </>
  );
}

export default ExperienceSection;
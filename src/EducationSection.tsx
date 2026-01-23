import ExperienceCard from "./ExperienceCard";
import type { TextCard } from "./types/TextCard";

const EDUCATION: TextCard = {
  companyName: "University of Pittsburgh",
  date: "2019 - 2023",
  location: "Pittsburgh, PA",
  companyURL: ['Pitt', 'https://www.pitt.edu'],
  descriptionTitle: "Bachelor of Science, Computer Science",
  description: (<><b>Badminton Club</b><br />
    &ensp;<b>Vice President: 2020 - 2021</b><br />
    &ensp;Assisted the President in club operation (during COVID-19 lockdown)<br />
    &ensp;<b>President: 2021 - 2023</b><br />
    &ensp;Re-introduced management positions. Initiated the competitive team</>)
}

function EducationSection() {
  return (
    <ExperienceCard exp={EDUCATION}></ExperienceCard>
  );
}
export default EducationSection;
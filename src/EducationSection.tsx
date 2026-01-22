import ExperienceCard from "./ExperienceCard";
import type { TextCard } from "./types/TextCard";

const EDUCATION: TextCard = {
  companyName: "University of Pittsburgh",
  date: "2019 - 2023",
  location: "Pittsburgh, PA",
  companyURL: ['Pitt', 'https://www.pitt.edu'],
  descriptionTitle: "Bachelor of Science, Computer Science",
  description: "Badminton Club\n\tVice President: 2020 - 2021\n\tPresident: 2021 - 2023"
}

function EducationSection() {
  return (
    <ExperienceCard exp={EDUCATION}></ExperienceCard>
  );
}
export default EducationSection;
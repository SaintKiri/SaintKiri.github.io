import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import type { SimpleCard } from './types/SimpleCard';

import './ExperienceCard.scss';

function ExperienceCard({ exp }: { exp: SimpleCard }) {
  return (
    <Card variant="outlined">
      <CardContent className='info'>
        <h5>{exp.companyName}</h5>
        <p>{exp.date}</p>
        {exp.location && <p>{exp.location}</p>}
        <a href={exp.companyURL[1]}>{exp.companyURL[0]}</a>
      </CardContent>
      <CardContent className='Description'>
        <h6>{exp.descriptionTitle}</h6>
        <p>{exp.description}</p>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
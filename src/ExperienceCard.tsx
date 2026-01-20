import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LinkIcon from '@mui/icons-material/Link';

import type { SimpleCard } from './types/SimpleCard';

function ExperienceCard({ exp }: { exp: SimpleCard }) {
  return (
    <Card variant="outlined">
      <Grid container spacing={2}>
        <Grid size={5}>
          <CardContent className='info'>
            <h5>{exp.companyName}</h5>

            <Grid container>
              <Grid size={1}>
                <CalendarMonthIcon />
              </Grid>
              <Grid size={11}>
                <p>{exp.date}</p>
              </Grid>

              {exp.location && <>
                <Grid size={1}>
                  <LocationPinIcon />
                </Grid><Grid size={11}>
                  <p>{exp.location}</p>
                </Grid>
              </>}

              <Grid size={1}>
                <LinkIcon />
              </Grid>
              <Grid size={11}>
                <a href={exp.companyURL[1]}>{exp.companyURL[0]}</a>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid size={7}>
          <CardContent className='description'>
            <h6>{exp.descriptionTitle}</h6>
            <p>{exp.description}</p>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ExperienceCard;
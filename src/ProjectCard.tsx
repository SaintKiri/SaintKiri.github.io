import { Card, CardActionArea, CardMedia, Box } from '@mui/material';

// Icons
import 'devicon/devicon.min.css'

import { PicCard } from './types/PicCard';

function ProjectCard({ pro }: { pro: PicCard }) {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', overflow: 'hidden' }}>
      <CardActionArea disableRipple href={pro.gitURL} target='_blank' rel='noopener noreferrer'>
        {/* The Background Image */}
        <CardMedia
          component="img"
          height="400"
          width="400"
          image={pro.backgroundPicURL}
          alt="Technology background"
          sx={{
            transition: 'transform 0.2s ease-in-out',
            '.MuiCardActionArea-root:hover &': {
              transform: 'scale(1.1)',
            },
          }} />

        {/* The Overlay Content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            transition: 'opacity 0.2s ease-in-out',
            textAlign: 'center',
            padding: 2,
            // Show overlay when CardActionArea is hovered
            '.MuiCardActionArea-root:hover &': {
              opacity: 1,
            },
          }}>
          <h5>{pro.title}</h5>
          <p>{pro.description}</p>
          <i className={pro.languageIcons[0]}></i>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
import { Card, CardActionArea, CardMedia, Box, CardContent } from '@mui/material';

// Icons
import 'devicon/devicon.min.css'

import { PicCard } from './types/PicCard';

function ProjectCard({ pro }: { pro: PicCard }) {
  return (
    <Card sx={{ width: 400, position: 'relative', overflow: 'hidden' }}>
      <CardActionArea disableRipple href={pro.url} target='_blank' rel='noopener noreferrer'>
        {
          // The Background Image 
          pro.backgroundPicURL ?
            (<CardMedia
              component="img"
              image={pro.backgroundPicURL}
              alt="Project Background"
              sx={{
                height: 400,
                width: '100%',
                transition: 'transform 0.2s ease-in-out',
                '.MuiCardActionArea-root:hover &': {
                  transform: 'scale(1.1)',
                },
              }} />)
            :
            // If no image, fill background with project title
            (<CardContent
              sx={{
                height: 400,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                transition: 'transform 0.2s ease-in-out',
                '.MuiCardActionArea-root:hover &': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <h3 style={{
                margin: 0,
              }}>
                {pro.title}
              </h3>
            </CardContent>)
        }

        {/* Overlay description */}
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
            // Text styling
            '& a': {
              color: '#87ceeb',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'color 0.2s',
            },
            '& a:hover': {
              color: '#a0e4ff', // Slightly lighter on hover
              textDecoration: 'underline',
            },
            '& code': {
              color: 'white',
              fontWeight: 'bold',
            }
          }}>
          <h5>{pro.title}</h5>
          <p>{pro.description}</p>
          <div style={{ display: 'flex', gap: '15px', fontSize: '2.5rem' }}>
            {pro.languageIcons.map((icon, index) => (
              <i key={index} className={pro.languageIcons[index]} />
            ))}
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
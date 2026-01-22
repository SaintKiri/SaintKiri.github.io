import {Container, Row, Col, Stack} from 'react-bootstrap';

import {CalendarMonth, LocationPin, Link} from '@mui/icons-material';

import type { TextCard } from './types/TextCard';

function ExperienceCard({ exp }: { exp: TextCard }) {
  return (
    <Container className='experience-card'>
      <Row className='justify-content-md-center'>
        <Col md='auto' className='left-pane'>
          <h5>{exp.companyName}</h5>
          <Stack className='icon-stack'>
            <div className='stack-item'>
              <CalendarMonth />
              <span><p>{exp.date}</p></span>
            </div>
            {exp.location &&
              <div className='stack-item'>
                <LocationPin />
                <span><p>{exp.location}</p></span>
              </div>
            }
            <div className='stack-item'>
              <Link />
              <span><a href={exp.companyURL[1]}>{exp.companyURL[0]}</a></span>
            </div>
          </Stack>
        </Col>

        <Col md={6} className='right-pane'>
          <Stack className='description align-items-start'>
            <h6>{exp.descriptionTitle}</h6>
            <p style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceCard;
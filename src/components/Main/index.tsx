import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import selfie from '../../assets/selfie.jpg';

interface WorkEntry {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const workHistory: WorkEntry[] = [
  {
    role: 'Sr NodeJS Developer',
    company: 'Globant',
    period: 'Jun 2022 – Present',
    highlights: [
      'Leveraged Claude Code and Spec-Driven Development to rapidly build an MVP prototype for a Healthcare client',
      'Improved test coverage, input validations and security hotspots in a high-performant media focused GraphQL project',
      'Experience with serverless using SAM and Pub/Sub Architecture',
      'Worked in a project which main stack includes a federated graphql setup for a high performant ecommerce',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Nearsure',
    period: 'Sep 2020 – Jul 2022',
    highlights: [
      'Developed solutions for a healthcare services focused client',
      'Followed a Microservices architecture for a variety of projects',
      'Created services to digest Healthcare information exchange standards such as HL7\'s FHIR',
      'Developed with an "enterprise friendly" mindset with solid practices',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Imaginamos',
    period: 'Feb 2020 – Sep 2020',
    highlights: [
      'Backend/Frontend development and improvements over deployment pipelines for bitcoin/ethereum trade platform',
      'Set up re-usable infrastructure templates with CloudFormation for an insurance company',
    ],
  },
  {
    role: 'Freelance Developer',
    company: '',
    period: 'Jun 2019 – Feb 2020',
    highlights: [
      'Developed Dashboard Web Apps, as CMS for a mobile App about corporate promotions',
      'Bug fixing and new features development on an existing dashboard and api project',
      'Developed Backend API for a Health Services company web page',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'VoV Solutions',
    period: 'Feb 2014 – Jun 2019',
    highlights: [
      'Defined the development processes and rules for the company development team',
      'Developed backend and infrastructure for multiple types of projects: CRM, ERP, Social Apps',
    ],
  },
  {
    role: 'Developer',
    company: 'ColombiaSoftware',
    period: 'Oct 2012 – Jan 2014',
    highlights: [
      'Developed custom requirements from the clients in the main ERP platform',
      'Helped in designing and implementing automation tools',
    ],
  },
];

export default function Main() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Card
        sx={{
          width: { xs: '100%', md: '20%' },
          textAlign: 'center',
          bgcolor: 'secondary.main',
          alignSelf: { md: 'flex-start' },
          position: { md: 'sticky' },
          top: { md: '20px' },
          flexShrink: 0,
        }}
      >
        <CardContent>
          <Avatar
            src={selfie}
            alt="Ruben Dario Barreiro Moncayo"
            sx={{
              width: { xs: 200, md: '80%' },
              height: { xs: 200, md: 'auto' },
              mx: 'auto',
              borderRadius: '50%',
            }}
            variant="rounded"
          />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
            Ruben Dario Barreiro Moncayo
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            NodeJS Backend Developer
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link
              href="https://www.linkedin.com/in/ruben-barreiro-2a46b294/"
              target="_blank"
              rel="noopener"
              sx={{
                mx: 1,
                color: '#90caf9',
                '&:hover': { color: '#bbdefb' },
              }}
            >
              LinkedIn
            </Link>
            |
            <Link
              href="https://github.com/rubenbarreiro"
              target="_blank"
              rel="noopener"
              sx={{
                mx: 1,
                color: '#90caf9',
                '&:hover': { color: '#bbdefb' },
              }}
            >
              Github
            </Link>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            contact me at:{' '}
            <Link
              href="mailto:ruben.barreirom@gmail.com"
              sx={{
                color: '#90caf9',
                '&:hover': { color: '#bbdefb' },
              }}
            >
              ruben.barreirom@gmail.com
            </Link>
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: { xs: '100%', md: '80%' },
          bgcolor: 'primary.main',
          flexGrow: 1,
          maxHeight: { md: '80vh' },
          overflow: 'auto',
          pb: 2,
        }}
      >
        <CardContent>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              borderBottom: 2,
              borderColor: 'divider',
              mb: 2,
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                '&.Mui-selected': {
                  color: '#fff',
                  borderBottom: 2,
                  borderColor: 'primary.main',
                },
              },
            }}
          >
            <Tab label="About me" />
            <Tab label="Work Experience" />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: 'text.secondary' }}>
                Hello there, I'm Ruben Barreiro — mostly Backend Developer; FullStack Developer when
                really needed. Currently working at Globant.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Proficient in
              </Typography>
              <List dense sx={{ pl: 2, mb: 2 }}>
                {['JavaScript', 'TypeScript', 'NodeJS', 'AWS'].map((item) => (
                  <ListItem key={item} sx={{ py: 0 }}>
                    <ListItemText primary={`- ${item}`} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Frontend
              </Typography>
              <List dense sx={{ pl: 2, mb: 2 }}>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="- ReactJS (yes it's not a framework but you do you)" />
                </ListItem>
              </List>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Currently learning
              </Typography>
              <List dense sx={{ pl: 2 }}>
                {['NestJS', 'Memcached'].map((item) => (
                  <ListItem key={item} sx={{ py: 0 }}>
                    <ListItemText primary={`- ${item}`} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              {workHistory.map((entry, index) => (
                <Box key={index}>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                      {entry.role}
                    </Typography>
                    {entry.company && (
                      <Typography
                        component="span"
                        sx={{ color: 'text.secondary', fontWeight: 'normal' }}
                      >
                        {' '}
                        @ {entry.company}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {entry.period}
                    </Typography>
                  </Box>
                  <List dense sx={{ pl: 2, mb: 1 }}>
                    {entry.highlights.map((highlight, i) => (
                      <ListItem key={i} sx={{ py: 0 }}>
                        <ListItemText primary={`- ${highlight}`} />
                      </ListItem>
                    ))}
                  </List>
                  {index < workHistory.length - 1 && <Divider sx={{ mb: 2 }} />}
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import useStyles from './styles';
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
  const styles = useStyles();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.summary}>
        <img src={selfie} className={styles.profileImage} />
        <br />
        <>
          <p className={styles.contentText}>
            <b>Ruben Dario Barreiro Moncayo</b>
            <br />
            <i>NodeJS Backend Developer</i>
            <br />
            <br />
            <a href="https://www.linkedin.com/in/ruben-barreiro-2a46b294/" target="_blank">
              LinkedIn
            </a>
            &nbsp; | &nbsp;
            <a href="https://github.com/rubenbarreiro" target="_blank">
              Github
            </a>
            <br />
            <br />
            contact me at: <a href="mailto:ruben.barreirom@gmail.com">ruben.barreirom@gmail.com</a>
          </p>
        </>
      </div>

      <div className={styles.content}>
        <div className={styles.tabBar}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`
            }
          >
            About me
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`
            }
          >
            Work Experience
          </NavLink>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/about" replace />}
          />
          <Route
            path="/about"
            element={
              <div className={styles.aboutContent}>
                <p className={styles.aboutIntro}>
                  Hello there, I'm Ruben Barreiro — mostly Backend Developer; FullStack Developer when really needed. Currently working at Globant.
                </p>

                <div className={styles.aboutSection}>
                  <h3 className={styles.aboutSectionTitle}>Proficient in</h3>
                  <ul className={styles.aboutList}>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                    <li>AWS</li>
                  </ul>
                </div>

                <div className={styles.aboutSection}>
                  <h3 className={styles.aboutSectionTitle}>Frontend</h3>
                  <ul className={styles.aboutList}>
                    <li>ReactJS (yes it's not a framework but you do you)</li>
                  </ul>
                </div>

                <div className={styles.aboutSection}>
                  <h3 className={styles.aboutSectionTitle}>Currently learning</h3>
                  <ul className={styles.aboutList}>
                    <li>NestJS</li>
                    <li>Memcached</li>
                  </ul>
                </div>
              </div>
            }
          />
          <Route
            path="/work"
            element={
              <div className={styles.workHistory}>
                {workHistory.map((entry, index) => (
                  <div key={index} className={styles.workEntry}>
                    <div className={styles.workHeader}>
                      <span className={styles.workRole}>{entry.role}</span>
                      {entry.company && <span className={styles.workCompany}> @ {entry.company}</span>}
                    </div>
                    <div className={styles.workPeriod}>{entry.period}</div>
                    <ul className={styles.workHighlights}>
                      {entry.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  profileImage: {
    borderRadius: '50%',
    '@media (max-width: 1850px)': {
      width: '80%',
    },
    '@media (max-width: 768px)': {
      maxWidth: '200px',
    },
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '20px',
    padding: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  summary: {
    width: '20%',
    textAlign: 'center',
    backgroundColor: '#16213e',
    borderRadius: '12px',
    padding: '2rem 1rem',
    alignSelf: 'flex-start',
    position: 'sticky',
    top: '20px',
    '@media (max-width: 768px)': {
      width: '100%',
      position: 'static',
    },
  },
  content: {
    width: '80%',
    backgroundColor: '#0f3460',
    borderRadius: '12px',
    padding: '2rem',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  contentText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontSize: '1.5em',
  },
  tabBar: {
    display: 'flex',
    gap: '4px',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '0',
  },
  tab: {
    background: 'none',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1.1em',
    cursor: 'pointer',
    borderRadius: '8px 8px 0 0',
    transition: 'background-color 0.2s, color 0.2s',
    fontFamily: 'inherit',
    textDecoration: 'none',
  },
  tabActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1.1em',
    fontFamily: 'inherit',
  },
  tabInactive: {
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1.1em',
    fontFamily: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
  workHistory: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  workEntry: {
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  workHeader: {
    fontSize: '1.2em',
    fontWeight: '600',
  },
  workRole: {
    color: '#fff',
  },
  workCompany: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
  },
  workPeriod: {
    fontSize: '0.9em',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '0.5rem',
  },
  workHighlights: {
    margin: '0.5rem 0 0 1.2rem',
    padding: 0,
    fontSize: '0.95em',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 1.6,
    listStyleType: '"- "',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  aboutIntro: {
    fontSize: '1.2em',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 1.6,
    margin: 0,
  },
  aboutSection: {},
  aboutSectionTitle: {
    fontSize: '1em',
    fontWeight: '600',
    color: '#fff',
    margin: '0 0 0.5rem 0',
  },
  aboutList: {
    margin: 0,
    paddingLeft: '1.2rem',
    fontSize: '0.95em',
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 1.8,
    listStyleType: '"- "',
  },
});

export default styles;

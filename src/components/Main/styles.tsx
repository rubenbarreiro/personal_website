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
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  summary: {
    width: '20%',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '2rem 1rem',
    },
  },
  content: {
    width: '80%',
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '1rem',
    },
  },
  contentText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontSize: '1.5em',
  },
});

export default styles;

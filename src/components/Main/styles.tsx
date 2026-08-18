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
});

export default styles;

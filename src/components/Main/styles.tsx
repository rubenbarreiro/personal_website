import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  profileImage: {
    borderRadius: '50%',
    '@media (max-width: 1850px)': {
      width: '80%',
    },
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  summary: {
    width: '20%',
    textAlign: 'center',
  },
  content: {
    width: '80%',
  },
  contentText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontSize: '1.5em',
  },
});

export default styles;

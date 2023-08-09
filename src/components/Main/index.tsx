import useStyles from './styles';
import selfie from '../../assets/selfie.jpg';

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
        <p className={styles.contentText}>
          {`
        Hello there,

        I'm Ruben Barreiro, mostly Backend Developer; FullStack Developer when is really needed. Currently working at Globant

        Things that I'm more proficient at:
          - JavaScript
          - TypeScript
          - NodeJS
          - AWS

        My preferred frontend library/framework:
          - ReactJS (yes is not a framework but you do you) 

        Things that I'm learning on my own:
          - NestJS
          - Memcached
        `}
        </p>
      </div>
    </div>
  );
}

import Box from "../Box/Box";
import Button from "../Button/Button";
import Htag from "../Htag/Htag";
import styles from "./Work.module.scss";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

export const Work = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Button appearance="orange-btn">How It Work ?</Button>
          <Htag tag="h1">
            Cross-border ordering has <br /> never been easier
          </Htag>
        </div>
        <div className={styles.bottom}>
          <Box className={styles.box} color="orange">
            <div className={styles.image}>
              <img src={img1} alt="error" />
            </div>
            <h2 className={styles.title}>Start Plan</h2>
            <span className={styles.descr}>
              Choose any of <br /> our packages
            </span>
          </Box>
          <Box className={styles.box} color="pink">
            <div className={styles.image}>
              <img src={img2} alt="error" />
            </div>
            <h2 className={styles.title}>Connect</h2>
            <span className={styles.descr}>
              Receive concepts <br /> In 24 hours
            </span>
          </Box>
          <Box className={styles.box} color="green">
            <div className={styles.image}>
              <img src={img3} alt="error" />
            </div>
            <h2 className={styles.title}>Match</h2>
            <span className={styles.descr}>
              Development
              <br />
              Stage
            </span>
          </Box>
          <Box className={styles.box} color="green">
            <div className={styles.image}>
              <img src={img4} alt="error" />
            </div>
            <h2 className={styles.title}>Complete</h2>
            <span className={styles.descr}>
              After-release <br /> Support
            </span>
          </Box>
          <Box className={styles.box} color="blue">
            <div className={styles.image}>
              <img src={img5} alt="error" />
            </div>
            <h2 className={styles.title}>Review</h2>
            <span className={styles.descr}>
              Project launch <br /> and checkout
            </span>
          </Box>
        </div>
      </div>
    </div>
  );
};

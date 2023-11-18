import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from "next/image";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}></Image>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>Its title!</h3>
          <span className={styles.subtitle}>Its subtitle</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi
            earum repudiandae voluptatibus asperiores cum vero, mollitia
            necessitatibus quibusdam libero.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀Coming Soon</span>
          <h3 className={styles.title}>Its title!</h3>
          <span className={styles.subtitle}>Its subtitle</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi
            earum repudiandae voluptatibus asperiores cum vero, mollitia
            necessitatibus quibusdam libero.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

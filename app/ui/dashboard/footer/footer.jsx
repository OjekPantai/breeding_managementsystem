import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Elvien</div>
      <div className={styles.text}>©️ All rights served.</div>
    </div>
  );
};

export default Footer;

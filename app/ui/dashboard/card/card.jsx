import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Pendapatan</span>
        <span className={styles.number}>Rp.4,200,000</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> Lebih tinggi dibanding
          minggu lalu
        </span>
      </div>
    </div>
  );
};

export default Card;

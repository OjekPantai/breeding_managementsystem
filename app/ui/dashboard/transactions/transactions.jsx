import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Laporan terbaru</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nama Mitra</td>
            <td>Status</td>
            <td>Tanggal</td>
            <td>Jumlah</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Bear
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.income}`}>
                Pendapatan
              </span>
            </td>
            <td>14.02.2024</td>
            <td>Rp.400,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Panda
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.outcome}`}>
                Pengeluaran
              </span>
            </td>
            <td>14.02.2024</td>
            <td>Rp.550,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

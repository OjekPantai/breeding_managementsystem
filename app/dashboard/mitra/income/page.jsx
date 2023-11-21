import Link from "next/link";
import styles from "@/app/ui/dashboard/mitra/income/incomes.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const IncomesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Tambah</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>No</td>
            <td>Tanggal</td>
            <td>Jumlah</td>
            <td>Harga</td>
            <td>Catatan</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>20.11.2023</td>
            <td>12</td>
            <td>Rp.20,000</td>
            <td>Contoh catatan</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Detail
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Hapus
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default IncomesPage;

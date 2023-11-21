import styles from "@/app/ui/dashboard/outcomes/singleOutcome/singleOutcome.module.css";

const SingleOutcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Tanggal</label>
          <input type="date" name="date" />
          <label>Harga Pakan</label>
          <input type="string" name="price" placeholder="500" />
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

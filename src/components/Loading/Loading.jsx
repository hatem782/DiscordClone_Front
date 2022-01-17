import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.outer}></div>
      <div className={styles.middle}></div>
      <div className={styles.inner}></div>
    </div>
  );
}

export default Loading;

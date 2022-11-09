import React from "react";
import styles from "./index.module.scss";
import HeaderComponent from "./Header";
const MainLayoutComponent = (props: any) => {
  return (
    <div className={styles.layoutContainer}>
      <HeaderComponent />
      <div
        className={`${styles.childContainer} ${styles.centerContainer}`}
        style={{ height: "90vh" }}
      >
        {props.children}
      </div>
      <HeaderComponent />
    </div>
  );
};

export default MainLayoutComponent;

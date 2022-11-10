import React from "react";
import styles from "./index.module.scss";
import logo from "../assets/logo.png";

const HeaderComponent = (props: any) => {
  return (
    <div className={styles.headerContainer}>
      <div
        className={`${styles.childContainer} ${styles.centerContainer}`}
        style={{ flexDirection: "row",justifyContent: "space-between" ,color: "white" }}
      >
     <div style={{display: "flex",height:"2.5rem",alignItems: "center"}}><img src={logo} /> <h3> Github User Search</h3></div>   
     <a >History</a>
      </div>
    </div>
  );
};

export default HeaderComponent;

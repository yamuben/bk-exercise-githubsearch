import React from "react";
import styles from "./index.module.scss";
import logo from "../assets/logo.png"

const HeaderComponent = (props: any) => {
  return (
    <div className={styles.headerContainer}>
    <div className={`${styles.childContainer} ${styles.centerContainer}`} style={{flexDirection:"row",gap:0,justifyContent:"flex-start"}}>
        <img src={logo}/> <h3> Github User Search</h3>
    </div>

    </div>
  );
};

export default HeaderComponent;
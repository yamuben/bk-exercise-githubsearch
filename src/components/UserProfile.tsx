import React from "react";
import styles from "./index.module.scss";

const Profile = (props: any) => {
  return (
    <div className={`${styles.profileCard} ${styles.centerContainer}`}>
      <div className={`${styles.avatalCard} ${styles.centerContainer}`}>
        <img src={props.data.avatar_url} width="100%" />
      </div>
      <div className={`${styles.contentCard} ${styles.centerContainer}`}>
        <h4 id="name">
          {props?.data?.login} <br />{" "}
          <label style={{ fontWeight: 200 }} >{props?.data?.login}</label>
        </h4>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import styles from "./index.module.scss";

const Profile = (props: any) => {
  const [drawerVisible, setDrawerVisible] = useState(true);
  return (
    <div className={`${styles.profileCard} ${styles.centerContainer}`}>
      <div className={`${styles.avatalCard} ${styles.centerContainer}`}>
        <img src={props.data.avatar_url} width="100%" />
      </div>
      <div
        className={`${styles.contentCard} ${styles.centerContainer}`}
        onClick={() => props.setDrawerVisible(true)}
      >
        <h4 id="name">
          {props?.data?.login} <br />{" "}
          <a
            href={props?.data?.html_url}
            target="_blank"
            style={{ fontWeight: 300, fontSize: "0.7rem" }}
          >
            {props?.data?.html_url}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Profile;

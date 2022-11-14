import React, { useEffect } from "react";
import styles from "./index.module.scss";
import HeaderComponent from "./Header";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsersAction } from "../redux/user/actions";
const MainLayoutComponent = (props: any) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("search");
  const { page } = useSelector((state: any) => state.user);
  useEffect(() => {
    searchParams && getAllUsersAction(searchParams, page)(dispatch);
  }, [searchParams, page]);
  return (
    <div className={styles.layoutContainer}>
      <HeaderComponent />
      <div
        className={`${styles.childContainer} ${styles.centerContainer}`}
        style={{ minHeight: "90vh", padding: "2rem" }}
      >
        {props.children}
      </div>
      <div className={styles.headerContainer}></div>
    </div>
  );
};

export default MainLayoutComponent;

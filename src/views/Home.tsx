import React from "react";
import SearchComponent from "../components/SearchForm";
import spinner from "../assets/spinner.gif";
import styles from "./index.module.scss";
import UserProfile from "../components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

const ViewComponent = (props: any) => {
  const dispatch = useDispatch();
  const { isFetching, users } = useSelector((state: any) => state.user);
  return (
    <>
      <SearchComponent />
      {isFetching && <img src={spinner} />}
      {users && (
        <div className={styles.resultContainer}>
          {users.map((user: any) => (
            <UserProfile data={user} />
          ))}
        </div>
      )}
    </>
  );
};
export default ViewComponent;

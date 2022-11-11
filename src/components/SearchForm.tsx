import React, { useState ,useEffect } from "react";
import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsersAction } from "../redux/user/actions";

const SearchComponent = (props: any) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState();
  const handleSubmit = () => {
    props.setSearchText(searchText);
    getAllUsersAction(searchText)(dispatch);
  };

  return (
    <div className={styles.searchContainer}>
      {/* <form> */}
        <input
          type="text"
          placeholder="Search User..."
          name="search"
          required
          onChange={(e: any) => setSearchText(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      {/* </form> */}
    </div>
  );
};
export default SearchComponent;

import React, { useState, useEffect } from "react";
import store from "store";
import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsersAction } from "../redux/user/actions";

import { useParams } from "react-router-dom";
const SearchComponent = (props: any) => {
  const dispatch = useDispatch();

  const { search } = useParams();
  const [searchText, setSearchText] = useState(search);
  const handleSubmit = () => {
    props.setSearchText(searchText);

    getAllUsersAction(searchText)(dispatch);
    !store.get("history")
      ? store.set("history", [{ searchText, done: Date.now() }])
      : store.set("history", [
          ...store.get("history"),
          { searchText, done: Date.now() },
        ]);
  };
  const keyPress=(e:any)=>{
    if(e.keyCode === 13){
      handleSubmit();
    }
 }
  useEffect(() => {
    search &&  handleSubmit();
  }, []);
  return (
    <div className={styles.searchContainer}>
      {/* <form> */}
      <input
        type="text"
        placeholder="Search User..."
        name="search"
        value={searchText}
        onKeyDown={keyPress}
        required
        onChange={(e: any) => setSearchText(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {/* </form> */}
    </div>
  );
};
export default SearchComponent;

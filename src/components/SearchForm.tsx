import React, { useState } from "react";
import styles from "./index.module.scss";

const SearchComponent = (props: any) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={(e: any) => console.log(searchText)}>
        <input
          type="text"
          placeholder="Search User..."
          name="search"
          required
          onChange={(e: any) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchComponent;

import React, { useEffect, useState } from "react";

import "../css/search.css";
import Item from "./item";
import itemsList from "../models/ItemsModel";

function Search(props) {
  let [result, setResult] = useState(itemsList);

  const setSearchTxt = (event) => {
    if (event.target.value) {
      setResult(
        itemsList.filter((item) => item.title.includes(event.target.value))
      );
    } else setResult(itemsList);
  };
  return (
    <div className="container-fluid">
      <input type="text" placeholder="search.." onInput={setSearchTxt} />
      {!result.length && <h4>No Search Results, try another word</h4>}
      <div className="row">
        {result.map((item, index) => {
          return (
            <>
              <Item
                className="col-12"
                key={index}
                title={item.title}
                description={item.description}
              />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Search;

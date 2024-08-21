import React, { useState } from "react";
import "./BrowserHistory.css";
import BrowserHistoryItem from "../BrowserHistoryItem/BrowserHistoryItem";

const BrowserHistory = (props) => {
  const { initialHistoryList } = props;
  const [searchInput, setSearchInput] = useState("");
  const [historyItemsList, setHistoryItemsList] = useState(initialHistoryList);

  const searchResult = historyItemsList.filter((each) =>
    each.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const onDeleteHistory = (id) => {
    const filteredDetailsList = searchResult.filter((each) => each.id !== id);
    setHistoryItemsList(filteredDetailsList);
  };
  return (
    <div>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="logo"
          className="nav-logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search History"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </div>
      {searchResult.length > 0 ? (
        <ul>
          {searchResult.map((eachItem) => (
            <BrowserHistoryItem
              browserHistoryDetails={eachItem}
              key={eachItem.id}
              onDeleteHistory={onDeleteHistory}
            />
          ))}
        </ul>
      ) : (
        <p className="para"> There is no history Below</p>
      )}
    </div>
  );
};

export default BrowserHistory;

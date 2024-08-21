import React from "react";
import "./BrowserHistoryItem.css";

const BrowserHistoryItem = (props) => {
  const { browserHistoryDetails, onDeleteHistory } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = browserHistoryDetails;

  const onDelete = () => {
    onDeleteHistory(id);
  };

  return (
    <li className="item-container">
      <p>{timeAccessed}</p>
      <div className="content-responsive">
        <div className="browser-card">
          <img src={logoUrl} alt={title} />
        </div>
        <div className="browser-content">
          <h1>{title}</h1>
          <p>{domainUrl}</p>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-icon"
        onClick={onDelete}
      />
    </li>
  );
};

export default BrowserHistoryItem;

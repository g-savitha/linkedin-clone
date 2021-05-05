import React from "react";
import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus: India Updates", "Top News - 1,242 readers")}
      {newsArticle(
        "IPL postponed due to rising COVID-19 cases",
        "1d ago - 32,502 readers"
      )}
      {newsArticle(
        "IITian creates an army of helpers",
        "1d ago - 4,290 readers"
      )}{" "}
      {newsArticle("Picking an imperfect job", "7h ago - 16,440 readers")}{" "}
      {newsArticle(
        "Swiggy gives 4-day work week in May",
        "1d ago - 1,176 readers"
      )}
    </div>
  );
}

export default Widgets;

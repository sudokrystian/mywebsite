import React from "react";
import { hobbyItems } from "./HobbyListData";
import "./HobbyList.scss";

const HobbyList: React.FC = () => {
  return (
    <div className="hobby-div">
      {hobbyItems.map((item, index) => (
        <div className="hobby-list-item" key={index}>
          <img src={item.image} alt={`icon-${index}`} className="hobby-pic" />
          <div className="hobbyText">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default HobbyList;
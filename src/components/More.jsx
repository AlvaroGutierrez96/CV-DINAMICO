import React from "react";
import "./More.css";

const More = ({ more }) => {
  return (
    <div>
      <div className="more card">
        {more.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="infoClass">📕 {item.info}</p>
              <p>{item.info}</p>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
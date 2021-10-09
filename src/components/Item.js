import React from "react";
import "./Item.scss";

function Item({name, calories}) {
  return (
    <div className="Item-container">
      <h3>{name}</h3>
      <h3>{calories}</h3>
    </div>
  );
}

export default Item;

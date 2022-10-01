import React from "react";

function CardComponent({card_title}) {
  return (
    <div className="CardComponent">
      <div className="CardComponent_Title">
        <p>{card_title}</p>
      </div>
    </div>
  );
}

export default CardComponent;

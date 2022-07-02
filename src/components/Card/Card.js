import React, { useCallback } from "react";
import "./Card.css";
const Card = ({ children, number, setCards, cards }) => {
  const striked = cards[number - 1].selected;
  //Using UseCallBack here to improve performance so this function is only initialized/set when the cards prop change
  const handleClick = useCallback(
    (num) => {
      const newCards = cards.map((el, index) => {
        if (index === num) {
          return { ...el, selected: !el.selected };
        }

        return el;
      });
      setCards(newCards);
    },
    [cards]
  );
  return (
    <div
      className={
        number !== 13 ? (striked ? `card selected` : `card`) : `card-middle`
      }
      onClick={() => handleClick(number - 1)}
    >
      <p className="number">{number}</p>
      <div className="text">{children}</div>
    </div>
  );
};

export default Card;

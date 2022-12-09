import "./randomcard.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

function RandomCard() {
  const [cardNumber, setCardNumber] = useState(1);
  const url =
    cardNumber !== ""
      ? `https://card-game-l81f.onrender.com/api/cards/${cardNumber}`
      : undefined;
  const { data, error } = useFetch(url);
  console.log(data);

  //   const cardValue = data.payload[0].card_value;
  //   const cardSuit = data.payload[0].suit;
  //   const cardImg = data.payload[0].img_url;

  const cardInfo = {
    value: data.payload[0].card_value,
    suit: data.payload[0].suit,
    img: data.payload[0].img_url,
  };

  if (error) {
    return <p>error</p>;
  }

  //function HandleClick

  return (
    <>
      <p className="card">{cardInfo.value + cardInfo.suit}</p>
      <img className="card-img" src={cardInfo.img} alt="card-img"></img>
      <button
        className="random-button"
        onClick={(e) => setCardNumber(Math.floor(Math.random() * 52))}
        value={cardNumber}
      >
        Click to get a random card
      </button>
    </>
  );
}

export default RandomCard;

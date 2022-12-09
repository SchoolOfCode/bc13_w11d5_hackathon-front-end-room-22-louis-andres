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

  if (error) {
    return <h1>error</h1>;
  }

  if (data !== undefined) {
    const cardInfo = {
      value: data.payload[0].card_value,
      suit: data.payload[0].suit,
      img: data.payload[0].img_url,
    };
    return (
      <> <div className="getRanCard">
        {/* <p className="card">{cardInfo.value + cardInfo.suit}</p> */}
        <img className="card-img" src={cardInfo.img} alt="card-img"></img>
        <button
          className="random-button"
          onClick={(e) => setCardNumber(Math.floor(Math.random() * 52))}
          value={cardNumber}
        >
          Click to get a random card
        </button>
        </div>  
      </>
    );
  }

  //function HandleClick

  return (
    <> <div className="getRanCard">
      {/* <p className="getRanCard">{cardInfo.value + cardInfo.suit}</p> */}
      <img className="card-img" alt="card-img"></img>
      <button
        className="random-button"
        onClick={(e) => setCardNumber(Math.floor(Math.random() * 52))}
        value={cardNumber}
      >
        Click to get a random card
      </button>
      </div>  
      </>
  );
}

export default RandomCard;

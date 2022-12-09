import "./randomcard.css";
import useFetch from "../../hooks/useFetch";

function RandomCard() {
  const { data, error } = useFetch(
    "https://card-game-backend.onrender.com/api/cards/1"
  );

  if (error) {
    return <p>error</p>;
  }

  if (null === data) {
    return <p>no card yet....fetching</p>;
  }

  return (
    <>
      <p className="card">{data}</p>
      <button className="random-button">Click to get a random card</button>
    </>
  );
}

export default RandomCard;

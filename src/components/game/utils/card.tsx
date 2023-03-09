import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/scss/dashboard/dashboard.scss";
import Game from "../../../assets/utils/models/Game";

interface CardProps {
  game: Game;
}

const Card: React.FC<CardProps> = ({ game }) => {
  console.log(game);

  return (
    <Link className="CardArea__Item" to={"/dashboard/game/" + game.id}>
        <img src={game.thumbnail} alt="ceci est la fin" />
        <p>{game.title}</p>
    </Link>
  );
};

export default Card;

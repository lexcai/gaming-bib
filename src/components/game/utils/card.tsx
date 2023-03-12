import React , { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import "../../../assets/scss/dashboard/dashboard.scss";
import Game from "../../../assets/utils/models/Game";

interface CardProps {
  game: Game;
}

const Card: React.FC<CardProps> = ({ game }) => {
  const [Favoris, setFavoris] = useState("bi bi-plus")

useEffect(() => {
  const element = document.getElementById("elementId")
  if (element) {
    element.addEventListener("click", () => {
      setFavoris(Favoris === "bi bi-plus" ? "bi bi-heart" : "bi bi-plus")
    })
  }
}, [Favoris])

  return (
    <Link className="CardArea__Item" to={"/dashboard/game/" + game.id}>
      <img src={game.thumbnail} alt="ceci est la fin" />
      <Link className="CardArea__Item" to={"/dashboard/favoris/"}>
      <i className={Favoris}></i>
      </Link>
      <p>{game.title}</p>
    </Link>
  )
};

export default Card;

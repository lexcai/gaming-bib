import React , { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import "../../../assets/scss/dashboard/dashboard.scss";
import Game from "../../../assets/utils/models/Game";

interface CardProps {
  game: Game
  onFavoriteClick: (gameId: number) => void
}

const Card: React.FC<CardProps> = ({ game, onFavoriteClick }) => {
  const [isFav, setIsFav] = useState(game.isFav)
  const [iconClass, setIconClass] = useState("bi bi-heart")

  useEffect(() => {
    setIconClass(isFav ? "bi bi-heart-fill" : "bi bi-heart")
  }, [isFav])

  const handleFavoriteClick = () => {
    setIsFav(!isFav)
    onFavoriteClick(game.id)
  }

  return (
    <Link className="CardArea__Item" to={"/dashboard/game/" + game.id}>
      <img src={game.thumbnail} alt="ceci est la fin" />
      <Link className="CardArea__Item" to={""}>
        <i className={iconClass} onClick={handleFavoriteClick}></i>
      </Link>
      <p>{game.title}</p>
    </Link>
  )
}

export default Card

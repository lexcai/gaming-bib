import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/scss/dashboard/dashboard.scss";
import Game from "../../assets/utils/models/Game";
import { GameContext } from "../../context/gameContext";

const GameDetails = () => {
  document.title = "Gaming Library - Détail du jeu";

  const params = useParams();
  const [currentGame, setCurrentGame] = useState<Game>(new Game());
  const { fetchOneDataById } = useContext(GameContext);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchOneDataById(params.id as string);
      if (data) {
        setCurrentGame(data);
      }
    }

    fetchData();
  }, [params.id]);

  return (
    <div className="GameDetails">
      <div className="GameDetails__Header">
        <img
          src={"https://www.freetogame.com/g/" + params.id + "/background.jpg"}
          alt="voila le header"
        />
        <h1>{currentGame.title}</h1>
      </div>
    </div>
  );
};

export default GameDetails;

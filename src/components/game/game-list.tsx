import React from "react";
import "../../assets/scss/dashboard/dashboard.scss";
import Game from "../../assets/utils/models/Game";
import Card from "./utils/card";

const GameList = () => {
  document.title = "Gaming Library - Librairie";

  let Games: Array<Game> = [];
  let Game1: Game = new Game();
  Game1.id = 450;
  Game1.title = "BlackShot: Revolution";
  Game1.thumbnail = "https://www.freetogame.com/g/282/thumbnail.jpg";

  for (let i = 0; i < 5; i++) {
    Games.push(Game1);
  }

  return (
    <div className="GameList">
      <div className="GameList__Title">
        <h1>Librairie</h1>
      </div>
      <div className="GameList__TopArea">
        <div className="GameList__TopArea__Search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Que recherchez vous ?" />
        </div>
        <div className="GameList__TopArea__SortBy">
          <i className="bi bi-sliders2-vertical"></i>
        </div>
      </div>
      <div className="CardArea">
        {Games.map((game) => (
          <Card key={game.id} game={game as Game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;

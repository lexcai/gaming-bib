import React from "react";
import "../../assets/scss/dashboard/dashboard.scss";
import Game from "../../assets/utils/models/Game";
import Card from "./utils/card";

const Favoris = () => {
  document.title = "Gaming Library - Favoris";

  let Games: Array<Game> = [];
  let Game1: Game = new Game();
  Game1.id = 1;
  Game1.title = "BlackShot: Revolution";
  Game1.thumbnail = "https://www.freetogame.com/g/282/thumbnail.jpg";

  for (let i = 0; i < 5; i++) {
    Games.push(Game1);
  }

  return (
    <div className="Favoris">
      <div className="Favoris__Title">
        <h1>Favoris</h1>
      </div>
      <div className="Favoris__TopArea">
        <div className="Favoris__TopArea__Search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Que recherchez vous ?" />
        </div>
        <div className="Favoris__TopArea__SortBy">
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

export default Favoris;

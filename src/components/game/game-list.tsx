import { useState, useContext, useRef, useEffect } from "react";
import { GameContext } from "../../context/gameContext";
import "../../assets/scss/dashboard/dashboard.scss";
import Game from "../../assets/utils/models/Game";
import Card from "./utils/card";

const GameList = () => {
  const { games } = useContext(GameContext);
  const [resultFound, setresultFound] = useState("");
  const inputs = useRef<any[]>([]);
  const searchRef = useRef<any>();

  console.log(games);

  const addInputs = (el: never) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      // const searchInput = await gameListProvider(
      //   inputs.current[0].value,
      //   {}
      // )
      setresultFound("");
      // à tester
      // formRef.current.reset();
    } catch {
      setresultFound("Wopsy,aucun jeu n'a été retrouvé");
    }
  };

  useEffect(() => {
    document.title = "Gaming Library - Librairie";
    console.log(games);
  }, [games]);

  return (
    <div className="GameList">
      <div className="GameList__Title">
        <h1>Librairie</h1>
      </div>
      <div className="GameList__TopArea">
        <div className="GameList__TopArea__Search">
          <i
            className="bi bi-search"
            onClick={handleSearch}
            ref={searchRef}
          ></i>
          <input
            ref={addInputs}
            type="text"
            placeholder="Que recherchez vous ?"
          />
        </div>
        <div className="GameList__TopArea__SortBy">
          <i className="bi bi-sliders2-vertical"></i>
        </div>
      </div>
      <div className="CardArea">
        {games.map((game: Game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;

import { useState, useContext, useRef, useEffect } from "react"
import { GameContext } from "../../context/gameContext"
import "../../assets/scss/dashboard/dashboard.scss"
import Game from "../../assets/utils/models/Game"
import Card from "./utils/card"

const GameList = () => {
  const { games } = useContext(GameContext)
  const searchRef = useRef<any>()
  const [searchResult, setSearchResult] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState("")


  console.log(games)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.currentTarget.value)
  }

  useEffect(() => {
    const filteredData = games.filter((item) => {
      const regex = new RegExp(searchTerm, "gi")
      return item.title.match(regex)
    })

    setSearchResult(filteredData)
  }, [searchTerm, games])


    document.title = "Gaming Library - Librairie"

  return (
    <div className="GameList">
      <div className="GameList__Title">
        <h1>Librairie</h1>
      </div>
      <div className="GameList__TopArea">
        <div className="GameList__TopArea__Search">
          <i className="bi bi-search" ref={searchRef}></i>
            <input
              onChange={handleSearch}
              name="searchTerm"
              type="text"
              placeholder="Que recherchez vous ?"
            />
            <button type="submit">TEST</button>
        </div>
        <div className="GameList__TopArea__SortBy">
          <i className="bi bi-sliders2-vertical"></i>
        </div>
      </div>
      {searchResult.length > 0 ? (
        <div className="CardArea">
          {searchResult.map((game: Game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div>Aucun résultat pour cette recherche.</div>
      )}
    </div>
  )
}

export default GameList

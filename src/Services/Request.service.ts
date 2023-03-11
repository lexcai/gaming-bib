import Game from "../assets/utils/models/Game";

export class RequestService {
  public options = {
    headers: {
      "X-RapidAPI-Key": "7a8f0a0e71msh0e7b6644496df46p15454bjsn2f2c71a49a68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  public fetchData(id: string): Promise<Game> {
    return fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id,
      this.options
    )
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }
  

  public async fetchAllData (query: string | null) {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games" + query,
        this.options
      );
      const result = await response.json();
      return result;
    } catch (error) {
       return;
    } 
  };
}

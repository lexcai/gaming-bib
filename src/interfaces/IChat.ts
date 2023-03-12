import Game from "../assets/utils/models/Game";
import { Users } from "../assets/utils/models/Users";

export interface Chat {

    id : number;

    IDUSER : string;

    IdGame : number;

    message : string;

    Users : Users;

    Game : Game;

    date : Date;
  }
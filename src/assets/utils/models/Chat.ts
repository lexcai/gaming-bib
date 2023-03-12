import Game from "./Game";
import { Users } from "./Users";

export class Chat {

    public id!: number;

    public IDUSER!: string;

    public IdGame!: number;

    public message!: string;

    public Users!: Users;

    public Game!: Game;

    public date!: Date;
}
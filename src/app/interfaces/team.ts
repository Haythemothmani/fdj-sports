import { Player } from "./player";

export class Team {
    _id: String;
    name: String;
    thumbnail: String;
    Players?: [Player];
}
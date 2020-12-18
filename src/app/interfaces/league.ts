import { Team } from "./team";

export class League {
    _id: String;
    name: String;
    sport: String;
    teams?: [Team];
}
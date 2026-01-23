import Match from "../domain/models/Match";
import Game from "../domain/models/Game";
import Player from "../domain/models/Player";

export default interface ILeagueController {
  getSchedule(date: string): Promise<Game[]>;
  getGame(match: Match): Promise<Match>;
  getPlayer(playerId: string): Promise<Player>;

}
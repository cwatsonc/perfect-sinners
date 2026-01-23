
import Player from '../models/Player';
import Game from '../models/Game';

interface ILeagueRepo {
  getSchedule(date: string): Promise<Game[]>;
  getRoster(teamId: string): Promise<Player[]>;
  getPlayer(playerId: string): Promise<Player>;
  getGame(gameId: string): Promise<Game>
}
export default ILeagueRepo;
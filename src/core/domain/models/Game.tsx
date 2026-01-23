
interface Game {
  gameID: string;
  date: string;
  gameType: string;
  away: string;
  home: string;
  gameTime: string;
  teamIDAway: string;
  teamIDHome: string;
  probableStartingPitchers: {
    away: string;
    home: string;
  };
  probableStartingLineups: {
    away: string[];
    home: string[];
  };
  gameTime_epoch: string;
}

export default Game;
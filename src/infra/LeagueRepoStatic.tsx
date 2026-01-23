import ILeagueRepo from '../core/domain/ports/ILeagueRepo';
import Game from '../core/domain/models/Game';
import Player from '../core/domain/models/Player';

export default class LeagueRepoStaticImpl implements ILeagueRepo {

  static gameList: Game[] = [
    {
      "gameID": "20260501_KC@SEA",
      "gameType": "REGULAR_SEASON",
      "away": "KC",
      "gameTime": "9:40p",
      "date": "20260501",
      "teamIDHome": "25",
      "gameTime_epoch": "1777686000.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "12",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "SEA"
    }, {
      "gameID": "20260501_ARI@CHC",
      "gameType": "REGULAR_SEASON",
      "away": "ARI",
      "gameTime": "",
      "date": "20260501",
      "teamIDHome": "5",
      "gameTime_epoch": "",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "1",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "CHC"
    },
    {
      "gameID": "20260501_LAD@STL",
      "gameType": "REGULAR_SEASON",
      "away": "LAD",
      "gameTime": "8:15p",
      "date": "20260501",
      "teamIDHome": "26",
      "gameTime_epoch": "1777680900.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "14",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "STL"
    },
    {
      "gameID": "20260501_TEX@DET",
      "gameType": "REGULAR_SEASON",
      "away": "TEX",
      "gameTime": "6:40p",
      "date": "20260501",
      "teamIDHome": "10",
      "gameTime_epoch": "1777675200.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "28",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "DET"
    },
    {
      "gameID": "20260501_CLE@OAK",
      "gameType": "REGULAR_SEASON",
      "away": "CLE",
      "gameTime": "9:40p",
      "date": "20260501",
      "teamIDHome": "20",
      "gameTime_epoch": "1777686000.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "8",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "OAK"
    },
    {
      "gameID": "20260501_HOU@BOS",
      "gameType": "REGULAR_SEASON",
      "away": "HOU",
      "gameTime": "7:10p",
      "date": "20260501",
      "teamIDHome": "4",
      "gameTime_epoch": "1777677000.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "11",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "BOS"
    },
    {
      "gameID": "20260501_TOR@MIN",
      "gameType": "REGULAR_SEASON",
      "away": "TOR",
      "gameTime": "8:10p",
      "date": "20260501",
      "teamIDHome": "17",
      "gameTime_epoch": "1777680600.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "29",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "MIN"
    },
    {
      "gameID": "20260501_BAL@NYY",
      "gameType": "REGULAR_SEASON",
      "away": "BAL",
      "gameTime": "7:05p",
      "date": "20260501",
      "teamIDHome": "19",
      "gameTime_epoch": "1777676700.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "3",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "NYY"
    },
    {
      "gameID": "20260501_NYM@LAA",
      "gameType": "REGULAR_SEASON",
      "away": "NYM",
      "gameTime": "9:38p",
      "date": "20260501",
      "teamIDHome": "13",
      "gameTime_epoch": "1777685880.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "18",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "LAA"
    },
    {
      "gameID": "20260501_CHW@SD",
      "gameType": "REGULAR_SEASON",
      "away": "CHW",
      "gameTime": "9:40p",
      "date": "20260501",
      "teamIDHome": "23",
      "gameTime_epoch": "1777686000.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "6",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "SD"
    },
    {
      "gameID": "20260501_SF@TB",
      "gameType": "REGULAR_SEASON",
      "away": "SF",
      "gameTime": "7:10p",
      "date": "20260501",
      "teamIDHome": "27",
      "gameTime_epoch": "1777677000.0",
      "probableStartingLineups": {
        "away": [],
        "home": []
      },
      "teamIDAway": "24",
      "probableStartingPitchers": {
        "away": "",
        "home": ""
      },
      "home": "TB"
    }
  ];

  static playerList: Player[] = []

  async getSchedule(date: string): Promise<Game[]> {
    return Promise.resolve(LeagueRepoStaticImpl.gameList.filter(game => game.date === date));
  }

  async getRoster(teamId: string): Promise<Player[]> {
    return Promise.resolve(LeagueRepoStaticImpl.playerList.filter(player => player.teamId === teamId));
  }

  async getPlayer(playerId: string): Promise<Player> {
    const player = LeagueRepoStaticImpl.playerList.find(p => p.id === playerId);
    if (!player) {
      throw new Error(`Player with id ${playerId} not found`);
    }
    return Promise.resolve(player);
  }
  async getGame(gameId: string): Promise<Game> {
    const game = LeagueRepoStaticImpl.gameList.find(g => g.gameID === gameId);
    if (!game) {
      throw new Error(`Game with id ${gameId} not found`);
    }
    return Promise.resolve(game);
  }
}




import ILeagueRepo from "@/src/core/domain/ports/ILeagueRepo";
import LeagueRepoStaticImpl from "@/src/infra/LeagueRepoStatic";

const lrepo: ILeagueRepo = new LeagueRepoStaticImpl();
const gameList = await lrepo.getSchedule("20260501");

export default function Games() {

  const epochStr = gameList[0].gameTime_epoch;

  const gameDate = new Date(Number.parseInt(epochStr) * 1000);
  const gameDateStr = gameDate.toDateString();


  const games = gameList.map((game) => {
    const gameStr = game.gameID.split('_')[1];
    return <button key={game.gameID} className="bg-amber-600 border-4 rounded-lg">{gameStr}</button>
  })

  return (<div className="flex flex-col w-80 justify-items-center text-white z-10 text-4xl">
    <div className="flex justify-center w-100"><h4 >{gameDateStr}</h4></div>
    <div className="overflow-x-auto flex flex-row w-100 space-x-3.5 justify-items-around">
      {games}
    </div>
  </div>);
}
import Match from "../domain/models/Match"

interface MatchUserDateProps {
  userId: string;
  date: string;
}
interface IMatchController {

  getMatchListForUserDate(props: MatchUserDateProps): Promise<Match[]>;
  getMatch(matchId: string): Promise<Match>;

}

export default IMatchController;

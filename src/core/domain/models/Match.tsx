export default interface Match {
  id: string;
  date: string;
  users: string[];
  score: Record<string, number>
}
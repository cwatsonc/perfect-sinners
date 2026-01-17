import Hero from '@/components/hero';
import gameImg from '@/public/match.jpg';


export default function MatchesPage() {
  return (
    <div>
      <Hero imgData={gameImg}
        imgAlt="game in sunshine"
        title="Active Matches"
      />
    </div>
  )
}

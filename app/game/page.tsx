import Hero from '@/components/hero';
import gameImg from '@/public/game.jpg';
import Games from '@/components/games';


export default function GamePage() {
  return (
    <div>
      <Hero imgData={gameImg}
        imgAlt="a baseball diamond in sunshine"
        title="Games for [date]"
      ><Games /></Hero>
    </div>
  )
}

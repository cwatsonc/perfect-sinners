import Hero from '@/components/hero';
import gameImg from '@/public/game.jpg';


export default function GamePage() {
  return (
    <div>
      <Hero imgData={gameImg}
        imgAlt="a baseball diamond in sunshine"
        title="Today's Games"
      />
    </div>
  )
}

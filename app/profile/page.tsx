import Hero from '@/components/hero';
import gameImg from '@/public/profile.jpg';


export default function GamePage() {
  return (
    <div>
      <Hero imgData={gameImg}
        imgAlt="A night game in progress"
        title="User Profile"
      />
    </div>
  )
}

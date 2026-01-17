import Hero from '@/components/hero';
import homeImg from '@/public/home.jpg';


export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg}
        imgAlt="Instant Fantasy"
        title="Instant Fantasy Baseball"
      />
    </div>
  )
}

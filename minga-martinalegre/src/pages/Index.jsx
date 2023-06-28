import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Index() {
  return (
    <main className='flex justify-center w-auto h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:flex-col items-start gap-[24px] md:w-[100%]'>
            <h1 className='hidden md:flex md:self-center md:text-6xl md:text-center'>Best manga reader</h1>
            <Carousel/>
            <Hero/>
    </main>
  )
}

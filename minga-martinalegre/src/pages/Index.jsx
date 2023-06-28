import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Index() {
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:inline-flex items-start gap-[24px] md:w-[100%]'>
            <h1 className='hidden md:flex md:self-center md:text-6xl md:text-center md:w-[100%] md:justify-center'>Best manga reader</h1>
            <Carousel/>
            <Hero/>
    </main>
  )
}

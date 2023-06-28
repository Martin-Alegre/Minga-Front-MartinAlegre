import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Index() {
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:inline-flex items-start gap-[24px] md:w-[100%] before:absolute before:inset-0 before:bg-black/50'>
            <h1 className='hidden md:flex md:self-center opacity-100 md:text-6xl md:text-center font-bold md:w-[100%] md:justify-center relative z-10'>Best manga reader</h1>
            <Carousel/>
            <Hero/>
    </main>
  )
}

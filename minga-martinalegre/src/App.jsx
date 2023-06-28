export default function App() {

  return (
      <div className="h-screen w-full bg-black p-0">
          <nav className="flex justify-between items-center">
            <img className="m-4" src="public\Menu.png" alt="" />
            <img className="m-4" src="public\Logo 2 1.png" alt="" />
          </nav>
          <main className='flex justify-center w-auto h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:flex-col items-start gap-[24px] md:w-[100%]'>
              <h1 className='hidden md:flex md:self-center md:text-6xl md:text-center'>Best manga reader</h1>
              <div className='flex flex-row self-center justify-around w-[100%] md:flex-wrap'>
              <img className='hidden flex-wrap xl:flex md:items-center  xl:w-[640px] xl:h-[650px] ' src="./public/mangas-hero.png" alt="mangas-hero" />
              <div className='flex h-[276] flex-col font-sans justify-center items-center gap-[25px] mx-[21px] md:flex-wrap md:gap-[24px] md:self-center md:w-[442px] md:m-[0px] md:h-[326px]'>
                  <h2 className='flex text-center items-center font-sans flex-col font-bold text-4xl md:text-left md:self-start md:w-[360px]'>Your favourite manga reader </h2>
                  <p className='flex text-center text-[16px] md:text-justify md:w-[391px] md:self-start' >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
              <div className=" w-64 h-8 flex items-center justify-around rounded-md border border-gray-400 bg-white bg-opacity-20 shadow-xl backdrop-blur-lg sm: w-100%">
                  <img src="public\Search.svg" alt="" />
                  <p className="text-white mr-4">Search mangas</p>
                  <p></p>
              </div>
              </div>
              </div>
          </main>
          <footer className="h-auto flex flex-col bg-black sm: h-96">
              <div className="">
                <img className="h-24 w-full rounded-b-full" src="/cswc5oyv 1.png" alt="" />
              </div>
              <div className="h-24 flex justify-around bg-black mt-2 ">
              <div className="flex justify-around gap-5">
                <p className="text-white">Home</p>
                <p className="text-white">Mangas</p>
              </div>
                <img className="h-8" src="public\Logo 2 1.png" alt="" />
              <div className="flex flex-col gap-5">
              <div className="flex justify-around gap-2">
                <img className="h-4" src="public\facebook-black.svg" alt="" />
                <img className="h-4" src="public\twitter-black.svg" alt="" />
                <img className="h-4" src="public\vimeo-black.svg" alt="" />
                <img className="h-4" src="public\youtube-black.svg" alt="" />
              </div>
              <div className="flex bg-white h-6 rounded-[4px]">
                <p className="">Donate</p>
                <img src="" alt="" />
              </div>
              </div>
              </div>
              <div className="h-px bg-white"></div>
          </footer>
      </div>
  )
}

export default function Search({ title }) {
  return (
    <div className=" w-[280px] h-10 flex items-center gap-16  rounded-md border border-gray-400 bg-white bg-opacity-20 shadow-xl backdrop-blur-lg sm: w-100% xl:text-left xl:self-start xl:w-[390px]">
        <img className="ml-2" src="public\Search.svg" alt="Search" />
        <p className="text-white mr-4 xl:ml-8">{title}</p>
    </div>
  )
}

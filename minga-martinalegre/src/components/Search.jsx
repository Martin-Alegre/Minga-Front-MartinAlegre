export default function Search({ title }) {
  return (
    <div className=" w-64 h-8 flex items-center justify-around rounded-md border border-gray-400 bg-white bg-opacity-20 shadow-xl backdrop-blur-lg sm: w-100%">
        <img src="public\Search.svg" alt="Search" />
        <p className="text-white mr-4">{title}</p>
    </div>
  )
}

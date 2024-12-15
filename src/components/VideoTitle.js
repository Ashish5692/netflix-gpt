
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-5 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
            <button className="bg-slate-800 text-white py-1 md:py-3 px-3 md:px-8 text-lg rounded-lg font-bold hover:bg-opacity-80">
      ▷ Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-8 text-lg bg-opacity-50 rounded-lg font-bold hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
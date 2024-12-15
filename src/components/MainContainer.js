import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return ;  //early return--it will fix the movies null problem and will not load any movie if there is no movie in the store.

    const mainMovie = movies[1];

    const {original_title, overview, id} = mainMovie;
    console.log("ye main movies part 2 : ", mainMovie)

  return (
    <div className="pt-[37%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview= {overview} />
        <VideoBackground movieId ={id} />
    </div>
  )
}

export default MainContainer
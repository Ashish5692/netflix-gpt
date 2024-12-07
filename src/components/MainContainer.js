import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return ;  //early return--it will fix the movies null problem and will not load any movie if there is no movie in the store.

    const mainMovie = movies[1];
    console.log("ye main hain" + mainMovie); //It will not run
    

    const {original_title, overview, id} = mainMovie;
    console.log("ye main movies part 2 : ", mainMovie)

  return (
    <div>
        <VideoTitle title={original_title} overview= {overview} />
        <VideoBackground movieId ={id} />
    </div>
  )
}

export default MainContainer
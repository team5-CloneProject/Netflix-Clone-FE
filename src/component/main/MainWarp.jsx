import {MainMovieWrap,} from "./style";
import Movie from "./Movie";
import Popular from "./slide/Popular/Popular";
import Nowplaying from "./slide/Nowplaying/Nowplaying";
import Tvpopular from "./slide/Tvpopular/Tvpopular";
import Toprated from "./slide/Toprated/Toprated";
// import Search from "./slide/Search/Search";
function MainWarp() {
  return (
    <MainMovieWrap>
      <Movie />
      <Popular />
      <Nowplaying />
      <Tvpopular />
      <Toprated />
      {/* <Search /> */}
      
    </MainMovieWrap>
  );
}

export default MainWarp;

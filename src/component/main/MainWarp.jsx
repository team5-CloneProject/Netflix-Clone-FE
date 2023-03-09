
import Movie from "./Movie";
import Popular from "./slide/Popular/Popular";
import Nowplaying from "./slide/Nowplaying/Nowplaying";
import Tvpopular from "./slide/Tvpopular/Tvpopular";
import Toprated from "./slide/Toprated/Toprated";
// import Search from "./slide/Search/Search";

function MainWarp() {

  return (
    <>
      <Movie/>
      <Popular />
      <Nowplaying />
      <Tvpopular />
      <Toprated />
      {/* <Search /> */}
    </>
  );
}

export default MainWarp;

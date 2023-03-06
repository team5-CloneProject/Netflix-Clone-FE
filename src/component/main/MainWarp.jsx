import MainSliderwrap from "./slide/MainSliderwrap";
import {
  MainMovieWrap,
  ArrowForward,
  ListLink,
  ListTitle,
  Title,
  List,
} from "./style";
import Movie from "./Movie";

function MainWarp() {
  // const { isLoading, isError, data } = useQuery("popular", movieGet);
  // if(isLoading) return <h1>"성공했습니다"</h1>
  // if (isError) return <h1>"실패했습니다"</h1>;
  // console.log(data);
  return (
    <MainMovieWrap>
      <Movie />
      <List>
        <ListTitle>
          <Title>현재 상영 영화</Title>
          <ListLink to="/">
            <span>모두보기</span>
            <ArrowForward />
          </ListLink>
        </ListTitle>
        <MainSliderwrap />
      </List>
      <List>
        <ListTitle>
          <Title>현재 상영 영화</Title>
          <ListLink to="/">
            <span>모두보기</span>
            <ArrowForward />
          </ListLink>
        </ListTitle>
        <MainSliderwrap />
      </List>
      <List>
        <ListTitle>
          <Title>현재 상영 영화</Title>
          <ListLink to="/">
            <span>모두보기</span>
            <ArrowForward />
          </ListLink>
        </ListTitle>
        <MainSliderwrap />
      </List>
      <List>
        <ListTitle>
          <Title>현재 상영 영화</Title>
          <ListLink to="/">
            <span>모두보기</span>
            <ArrowForward />
          </ListLink>
        </ListTitle>
        <MainSliderwrap />
      </List>
    </MainMovieWrap>
  );
}

export default MainWarp;

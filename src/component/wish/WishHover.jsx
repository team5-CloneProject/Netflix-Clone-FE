import {
  Slidehoverbox,
  Slideinfo,
  InfoTop,
  InfoIconPlay,
  InfoIcon,
  OutlinePlus,
  OutlineLike,
  OutlineDislike,
  InfoBtmTitle,
  InfoBtmP,
  InfoPlay,
  InfoI,
  TwotoneLike,
  TwotoneDislike,
  OutlineCheck,
} from "../main/slide/hover";
import { Hovermovie, SlideImg } from "../main/slide/style";
import WishModal from "./WishModal";
import ModalPortal from "../../api/portal";
import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MovieGood, MovieWish } from "../../api/api";
function WishHover({ item }) {
  const queryclient = useQueryClient();
  //좋아용....
  const likemutation = useMutation(MovieGood.Movielike, {
    onSuccess: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("성공하셨습니다.");
    },
    onError: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("실패하셨습니다.");
    },
  });
  const [like, setLike] = useState("LIKE");
  const likeHander = (id) => {
    const likeBtn = {
      id: id,
      status: "LIKE",
    };
    likemutation.mutate(likeBtn);
    setLike(!like);
  };
  //싫어용....
  const dislikemutation = useMutation(MovieGood.Moviedislike, {
    onSuccess: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("성공하셨습니다.");
    },
    onError: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("실패하셨습니다.");
    },
  });
  const [disLike, setDisLike] = useState("DISLIKE");
  const disLikeHander = (id) => {
    const disLikeBtn = {
      id: id,
      status: "DISLIKE",
    };
    dislikemutation.mutate(disLikeBtn);
    setDisLike(!disLike);
  };

  //찜하기
  const WishAddmutation = useMutation(MovieWish.MovieWishAdd, {
    onSuccess: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("성공하셨습니다.");
    },
    onError: () => {
      queryclient.invalidateQueries("fulfilled");
      console.log("실패하셨습니다.");
    },
  });
  const [wishAdd, setWishAdd] = useState(item.id);
  const WishAddHander = (id) => {
    const WishAddBtn = {
      id: id,
    };
    WishAddmutation.mutate(WishAddBtn);
    setWishAdd(!wishAdd);
  };
  //모달 관련..........
  const [infoOpen, setInfoOpen] = useState(false);
  const infoOutBtn = () => {
    setInfoOpen(!infoOpen);
  };
  useEffect(() => {
    if (infoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [infoOpen]);

  return (
    <Slidehoverbox className="slidehover">
      <Hovermovie>
        <SlideImg src={item.poster_path} alt={item.title} />
      </Hovermovie>
      <Slideinfo>
        <InfoTop>
          <InfoTop>
            <InfoIconPlay>
              <InfoPlay />
            </InfoIconPlay>
            <InfoIcon onClick={() => WishAddHander(item.id)}>
              {wishAdd ? <OutlineCheck /> : <OutlinePlus />}
            </InfoIcon>
            <InfoIcon onClick={() => likeHander(item.id, item.status)}>
              {like ? <TwotoneLike /> : <OutlineLike />}
            </InfoIcon>
            <InfoIcon onClick={() => disLikeHander(item.id, item.status)}>
              {disLike ? <TwotoneDislike /> : <OutlineDislike />}
            </InfoIcon>
          </InfoTop>
          <InfoIcon onClick={() => setInfoOpen(item.id)}>
            <InfoI />
          </InfoIcon>
        </InfoTop>
        <div>
          <InfoBtmTitle>{item.title}</InfoBtmTitle>
          <InfoBtmP>{item.overview} </InfoBtmP>
        </div>
      </Slideinfo>
      <ModalPortal>
        {infoOpen === item.id && (
          <WishModal
            setInfoOpen={setInfoOpen}
            item={item}
            infoOutBtn={infoOutBtn}
            like={like}
            likeHander={likeHander}
            disLike={disLike}
            disLikeHander={disLikeHander}
            wishAdd={wishAdd}
            WishAddHander={WishAddHander}
          />
        )}
      </ModalPortal>
    </Slidehoverbox>
  );
}

export default WishHover;
import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import db from "../firebase";
import { useEffect } from "react";
import { setMovies } from "../redux/modules/movies";
import { useAppDispatch } from "../redux/configStore";
const Home = () => {
  const dispatch = useAppDispatch();
  let recommends: any[] = [];
  let trendings: any[] = [];
  let originals: any[] = [];
  let newDisneys: any[] = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        let data = { id: doc.id, ...doc.data() };
        switch (doc.data().type) {
          case "recommend":
            recommends.push(data);
            break;
          case "trending":
            trendings.push(data);
            break;
          case "original":
            originals.push(data);
            break;
          case "new":
            newDisneys.push(data);
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          trending: trendings,
          original: originals,
          new: newDisneys,
        })
      );
    });
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

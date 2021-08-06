import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../redux/modules/movies";
import { useAppDispatch, useAppSelect } from "../redux/configStore";
import { getAllMovies } from "../redux/modules/movies";
interface RouteParams {
  id: string;
  category: string | any;
}
const Detail = () => {
  const { id, category } = useParams<RouteParams>();
  const [detailData, setDetailData] = useState<Movie>();
  const allMovies = useAppSelect(getAllMovies);

  useEffect(() => {
    switch (category) {
      case "recommend":
        setDetailData(allMovies.recommend?.find((value) => value.id === id));
        break;
      case "trending":
        setDetailData(allMovies.trending?.find((value) => value.id === id));
        break;
      case "original":
        setDetailData(allMovies.original?.find((value) => value.id === id));
        break;
      case "new":
        setDetailData(allMovies.new?.find((value) => value.id === id));
        break;
    }
  }, []);
  return <div>디테일페이지</div>;
};

export default Detail;

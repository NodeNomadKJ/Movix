import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";

const HeroBanner = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [itemIds, setItemIds] = useState([]);
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(`/movie/upcoming`);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || !data.results) return;

    const generatedBackgrounds = Array.from({ length: 10 }, (_, index) => {
      const bg =
        url.backdrop + data.results[index % data.results.length]?.backdrop_path;
      return bg;
    });

    const itemIdsArray = data.results.map((item) => item.id);

    setBackgrounds(generatedBackgrounds);
    setItemIds(itemIdsArray);

    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % generatedBackgrounds.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data, url]);

  const handleBannerClick = () => {
    const itemId = itemIds[currentBackgroundIndex];
    navigate(`/movie/${itemId}`);
  };

  return (
    <div className="heroBanner" onClick={handleBannerClick}>
      <div className="list-item">
        <ul className="item">
          <li className="items">
            Trending
          </li>
          <li className="items">
            Popular
          </li>
          <li className="items">
            Top Rated
          </li>
        </ul>
      </div>
      {!loading && (
        <div className="backdrop-img">
          <Img src={backgrounds[currentBackgroundIndex]} />
        </div>
      )}

      <div className="opacity-layer"></div>
    </div>
  );
};

export default HeroBanner;

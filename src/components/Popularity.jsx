import React from "react";
import genrePopularity from "../media/genrePopularity.png";
import genrePopularityv from "../media/genrePopularityv.mp4";
import Container from "./Coontainer";

const Popularity = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Analysis of the Genre by Popularity among Viewers
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <div>
            <img src={genrePopularity} alt="genre popularity" />
            <p className="text-xs">
              <a className="font-bold">Figure 2A:</a> Overall popularity of the
              various genres of movies released from 1980 -2024 among viewers.
            </p>
          </div>
          &nbsp;
          <div>
            <p>
              <a className="font-bold">Takeaway: </a> Drama has remained a
              crowds favorite for over four decades with action, thriller and
              comedy right behind it.
            </p>
          </div>
        </Container>
        <Container>
          <div>
            <video controls width="600">
              <source src={genrePopularityv} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-xs">
              <a className="font-bold">Figure 2B:</a> Popularity of the various
              genres of movies released among viewers, animated by decades. .
            </p>
          </div>
          &nbsp;
          <div>
            <p>
              <a className="font-bold">Takeaway: </a> Drama was the viewer's top
              choice for 3 decades and was taken over by action in the 2020s
            </p>
          </div>
        </Container>
      </div>
      &nbsp;
    </div>
  );
};

export default Popularity;

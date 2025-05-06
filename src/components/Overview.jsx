import React from "react";
import Container from "./Coontainer";
import twilight from "../media/twilight.jpg";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Exploring Trends in the Movie Industry Using TMDB Data
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          &nbsp;
          <p>
            This project explores how movie genre trends have changed over the
            years. In addition to tracking genre popularity over time, I also
            examine how factors like budget and box office success relate to
            these trends, providing context for why certain genres rise
            or fall.
          </p>
        </Container>
        <Container>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Inspiration
          </h1>
          &nbsp;
          <div>
            <div className="flex justify-between font-serif text-cyan-600 w-full px-4 text-lg">
              <p>Twilight</p>
              <p>Vampire Suck</p>
            </div>

            <img src={twilight} alt="twilight" />
          </div>
        </Container>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <p>
            <a className="font-bold">Parameters for Analysis: </a>Only four
            decades are considered (1980-2024). Genres not considered are
            documentary, and tv movies.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Overview;

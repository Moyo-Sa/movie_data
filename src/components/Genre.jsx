import React from "react";
import Container from "./Coontainer";
import overallGenre from "../media/overallGenre.png";
import GenreTable from "./GenreTable";
import genreYear from "../media/genreYear.png";

const Genre = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Analysis of the Genre by Movie Production/Release
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <div>
            <img src={overallGenre} alt="genre distribution" />
            <p className="text-xs">
              <a className="font-bold">Figure 1A:</a> Genre Distribution of
              Released Movies from 1980 -2024. The x-axis is the genre, while
              the y-axis is the unweighted count.{" "}
            </p>
          </div>
          &nbsp;
          <div>
            <p>
              <a className="font-bold">Takeaway: </a>The genre with the highest
              count is Drama, while Western movies have the lowest movie count,
              despite cultural sentiment.
            </p>
          </div>
        </Container>
        <Container>
          <div>
            <img src={genreYear} alt="genre over the years" />
            <p className="text-xs">
              <a className="font-bold">Figure 1B:</a> Bar chart showing the
              genre distribution during each year from 1980 – 2024, with year on
              the y axis and movie count on the x-axis.
            </p>
            &nbsp;
            <div>
              <p>
                <a className="font-bold">Takeaway: </a>Drama has been the top
                genre over 4 decades.
              </p>
            </div>
          </div>
        </Container>
      </div>
      &nbsp; &nbsp;
      <div className="flex justify-center">
        <Container>
          <div className="text-xs">
            <GenreTable />
            <a className="font-bold">Table 1:</a> Table summarizing the top,
            second top and bottom genre, in terms of production release over
            four decades (1980-2024).
          </div>
          &nbsp;
          <div>
            <p>
              <a className="font-bold">Takeaway: </a>Drama has remained the top
              produced genre in four decades, with comedy, action and thriller
              competing for second best.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Genre;

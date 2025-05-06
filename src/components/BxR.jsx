import React from "react";
import Container from "./Coontainer";
import budgetTotal from "../media/budgetTotal.png";
import revenueTotal from "../media/revenueTotal.png";
// import budgetDecade from "../media/budgetDecade.png";
// import revenueDecade from "../media/revenueDecade.png";
import budgetLine from "../media/budgetLine.png";
import revenueLine from "../media/revenueLine.png";

const BxR = () => {
  return (
    <div>
      &nbsp;
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Comparison of the Budget and Revenue of Various Genres
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        &nbsp;
        {/* Budget Overall */}
        <Container>
          <div>
            <img src={budgetTotal} alt="total budget" />
            <p className="text-xs">
              <a className="font-bold">Figure 3A:</a> Overall budget used in the
              production of movies of various genres released from 1980 -2024.
            </p>
          </div>
        </Container>
        {/* Revenue Overall */}
        <Container>
          <div>
            <img src={revenueTotal} alt="total budget" />
            <p className="text-xs">
              <a className="font-bold">Figure 3B:</a> Overall revenue generated
              from movies of various genres released from 1980 -2024.
            </p>
          </div>
        </Container>
      </div>
      &nbsp; &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Budget over the years */}
        <Container>
          <div>
            <img src={budgetLine} alt="budget per genre distribution" />
            <p className="text-xs">
              <a className="font-bold">Figure 3C:</a> Overall budget used in the
              production of movies of various genres per year from 1980 -2024.
            </p>
          </div>
        </Container>
        {/* Revenue over the years */}
        <Container>
          <div>
            <img src={revenueLine} alt="genre distribution" />
            <p className="text-xs">
              <a className="font-bold">Figure 3D:</a> Overall revenue generated
              from movies of various genres yearly from 1980 -2024.
            </p>
          </div>
        </Container>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <p>
            <a className="font-bold">Takeaway: </a> Action and Adventure require
            the most budget and are also the most profitable genres. There was a
            dip in budget and revenue in 2020.{" "}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default BxR;

import React from "react";
import Container from "./Coontainer";
import scatterRvB from "../media/scatterRvB.png";
import rvbYear from "../media/rvbYear.mp4";
import profitability from "../media/profitability.png";
import rbGenre from "../media/rbGenre.png";

const BvR = () => {
  return (
    <div>
      &nbsp; &nbsp;
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Analysis of Budget againts Revenue by Genre.
        </h2>
      </div>
      &nbsp;
      {/* Revenue vs Budget */}
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <div>
            <img src={scatterRvB} alt="scatter plot showing revenue vs" />
            <p className="text-xs">
              <a className="font-bold">Figure 4A:</a> Scatter plot that plots
              the average budget against the average revenue across various
              genres. The circles are color-coded based on genre, and the size
              of the bubble corresponds to the number of movies released during
              the period (1980-2024).
            </p>
          </div>
        </Container>

        <Container>
          <div>
            <img src={rbGenre} alt="profitability of different genders" />
            <p className="text-xs">
              <span className="font-bold">Figure 4B:</span> Stacked bar chart
              that shows the revenue per genre by budget category (low budget =
              budget &lt; 10 million; medium budget = 10 million &lt; budget
              &lt; 50 million; high budget = budget &gt; 50 million).
            </p>
          </div>
        </Container>
      </div>
      &nbsp;
      {/* Profitabilit of Different Genres */}
      <div className="flex justify-center">
        <Container>
          <div>
            <img src={profitability} alt="profitability of different genders" />
            <p className="text-xs">
              <span className="font-bold">Figure 4B:</span> Stacked bar chart
              showing the average profitability of each genre (profitability =
              revenue - budget);
            </p>
          </div>
        </Container>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          <p>
            <a className="font-bold">Takeaways: </a> The higher the budget, the
            higher the revenue across various genres. Action and adventure have
            the highest total revenue (both reaching approximately $200
            billion), with significant contributions from high-budget
            productions. When looking at other genres, there is a pattern in
            which genres like Action, Adventure, and Comedy perform well
            regardless of budget category, while others like Western and War
            generate minimal revenue.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default BvR;

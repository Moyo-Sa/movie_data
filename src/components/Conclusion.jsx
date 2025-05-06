import React from "react";
import Container from "./Coontainer";
import overlap from "../media/overlap.png";
import visual from "../media/visual.png";
import money from "../media/money.jpg";
import franchise2 from "../media/franchise2.avif";

const Conclusion = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Conclusion!
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          Drama remains a consistently popular genre in terms of release volume
          and audience interest, yet it is not as profitable as other genres
          <img
            src={overlap}
            alt="overlap"
            className="w-32 h-auto  rounded-full object-cover"
          />
        </Container>
        &nbsp;
        <Container>
          Action and Adventure genres lead in profitability, driven by larger
          budgets that accommodate high production demands and franchise
          potential.
          <img
            src={franchise2}
            alt="overlap"
            className="w-32 h-auto  rounded-full object-cover"
          />
        </Container>
      </div>
      &nbsp;
      <div className="flex justify-center"></div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        <Container>
          Higher budgets generally correlate with higher revenue, especially in
          genres that capitalize on visual effects, merchandise, and global
          appeal.
          <img
            src={visual}
            alt="overlap"
            className="w-32 h-auto  rounded-full object-cover"
          />
        </Container>
        <Container>
          Strategic investment in high-performing genres—particularly Action,
          Adventure, and Comedy—combined with thoughtful budget scaling, can
          maximize returns.
          <img
            src={money}
            alt="overlap"
            className="w-32 h-auto  rounded-full object-cover"
          />
        </Container>
      </div>
    </div>
  );
};

export default Conclusion;

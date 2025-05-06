import React from "react";
import Container from "./Coontainer";
import twilightCGI from "../media/twilightCGI.png";
import avatarCGI from "../media/avatarCGI.jpg";
import stunts from "../media/stunts.jpg";
import franchise from "../media/franchise.jpg";
import drama from "../media/drama.png";

const Discrepancy = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Why doesn't the financial data by genre match the genre popularity and
          production data?
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        &nbsp;
        {/* Drama */}
        <Container>
          <div></div>
          <div>
            <img src={drama} alt="covid" />
          </div>
        </Container>
      </div>
      &nbsp; &nbsp; &nbsp;
      <p>{""}</p>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          High Budget and Revenue seen in Action/Adventure
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        &nbsp;
        {/* Twilight */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Twilight
            </h1>
          </div>
          <div>
            <img src={twilightCGI} alt="covid" />
          </div>
        </Container>
        {/* Avatar */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Avatar
            </h1>
          </div>
          <div>
            <img src={avatarCGI} alt="social distancing" />
          </div>
        </Container>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        &nbsp;
        {/* Stunts */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Stunts
            </h1>
          </div>
          <div>
            <img src={stunts} alt="covid" />
          </div>
        </Container>
        {/* Franchise */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Franchise
            </h1>
          </div>
          <div>
            <img src={franchise} alt="franchise" />
          </div>
        </Container>
      </div>
      &nbsp;
    </div>
  );
};

export default Discrepancy;

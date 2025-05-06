import React from "react";
import Container from "./Coontainer";
import socialDistancing from "../media/socialDistancing.jpg";

import theater from "../media/theater.jpg";

import covid from "../media/covid.jpg";

const Distruption = () => {
  return (
    <div>
      &nbsp;
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Reason for Disruption in Budget and Revenue in the Movie Industry.
        </h2>
      </div>
      &nbsp;
      <div className="flex justify-center gap-8 flex-wrap">
        &nbsp;
        {/* Covid */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Covid
            </h1>
          </div>
          <div>
            <img src={covid} alt="covid" />
          </div>
        </Container>
        {/* Social Distancing */}
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Social Distancing
            </h1>
          </div>
          <div>
            <img src={socialDistancing} alt="social distancing" />
          </div>
        </Container>
      </div>
      &nbsp;
      {/* No movies */}
      <div className="flex justify-center">
        <Container>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Theater
            </h1>
          </div>
          <div>
            <img src={theater} alt="covid" />
          </div>
        </Container>
      </div>
      &nbsp;
    </div>
  );
};

export default Distruption;

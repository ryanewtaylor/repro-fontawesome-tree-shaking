import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// does not tree shake
// import { faEnvelope, faGolfBall } from "@fortawesome/free-solid-svg-icons";

// tree shakes
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGolfBall } from "@fortawesome/free-solid-svg-icons/faGolfBall";

export function App() {
  return (
    <>
      <p>Shake it Off!</p>
      <FontAwesomeIcon icon={faEnvelope} />
      <br />
      <FontAwesomeIcon icon={faGolfBall} />
    </>
  );
}

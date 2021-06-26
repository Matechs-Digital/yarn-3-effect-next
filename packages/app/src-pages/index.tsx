// tracing: off

import * as O from "@effect-ts/core/Option";
import * as React from "react";

function Home() {
  return <div>{O.some("OK OK").value}</div>;
}

export default Home;

import * as O from "@effect-ts/core/Option";
import * as React from "react";

export function Home() {
  return <div>{O.some("It works").value}</div>;
}

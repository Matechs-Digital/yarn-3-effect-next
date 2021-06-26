import * as O from "@effect-ts/core/Option";
import { underline } from "app/common/Styles";
import * as React from "react";

export function Home() {
  return <div style={underline}>{O.some("It works").value}</div>;
}

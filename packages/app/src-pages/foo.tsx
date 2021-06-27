// tracing: off

import { Home } from "app/components/Home";
import * as React from "react";

function Foo() {
  return <Home />;
}

export async function getServerSideProps() {
  return {};
}

export default Foo;

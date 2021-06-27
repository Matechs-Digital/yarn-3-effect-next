import * as T from "@effect-ts/core/Effect";
import * as O from "@effect-ts/core/Option";
import { underline } from "app/common/Styles";
import * as React from "react";

export function Home() {
  const [counter, updateCounter] = React.useState(0);

  const positive = O.fromPredicate((n: number) => n > 0);
  const message = positive(counter).chain((n) => O.some(`It works: ${n}`));

  React.useEffect(() => {
    T.succeedWith(() => updateCounter((n) => n + 1)).runPromise();
  }, []);

  return <div style={underline}>{message.value || "Loading..."}</div>;
}

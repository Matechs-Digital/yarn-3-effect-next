import * as T from "@effect-ts/core/Effect";
import type * as R from "@effect-ts/node/Runtime";

declare module "@effect-ts/system/Effect/effect" {
  export interface Base<R, E, A> extends Effect<R, E, A> {}

  export interface Effect<R, E, A> {
    /**
     * @rewrite runMain from "@effect-ts/node/Runtime"
     */
    runMain<EX, AX>(
      this: T.Effect<T.DefaultEnv, EX, AX>,
      customHook?: (cont: NodeJS.SignalsListener) => NodeJS.SignalsListener,
      customTeardown?: typeof R.defaultTeardown
    ): void;
  }
}

T.succeed(0)
  .chain((n) => T.succeed(n + 1))
  .runMain();

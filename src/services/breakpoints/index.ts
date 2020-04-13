import facepaint, { DynamicStyleFunction } from "facepaint";

export const mq: DynamicStyleFunction = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

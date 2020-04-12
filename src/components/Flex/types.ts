export type FlexProps = {
  children: React.ReactNode;

  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "baseline"
    | "first baseline"
    | "last baseline";

  flex?: number | string;
  align?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  margin?: string;
  padding?: string;
  height?: number | string;
  width?: number | string;
  minHeight?: string;

  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
};

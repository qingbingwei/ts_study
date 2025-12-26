export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];


export const colorCode = (color: string): number => {
  const code = COLORS.indexOf(color);
  return code;
}


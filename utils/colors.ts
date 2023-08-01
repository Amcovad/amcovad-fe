const COLORS = {
  DANGER: "danger",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
} as const;

export type ColorType = typeof COLORS[keyof typeof COLORS];

export default COLORS;

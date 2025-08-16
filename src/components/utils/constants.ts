
export enum PASSWORD_STATUS {
  INVALID,
  WEEK,
  FAIR,
  GOOD,
  STRONG,
}

export enum DEVICES {
  DESKTOP,
  TABLET,
  MOBILE,
}

export enum LABEL {
  active,
  deActive,
}

export enum USER_STATUS {
  AVAILABLE,
  UNAVAILABLE,
}

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};

export declare enum ButtonType {
  Default = "default",
  Primary = "primary",
  Link = "link",
  Text = "text",
  Ghost = "ghost",
  Dashed = "dashed",
}

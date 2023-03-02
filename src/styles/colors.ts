import { Theme, useTheme } from "@mui/material/styles";
import { SxProps } from "@mui/material";

export type ColorScheme = "grey" | "blue" | "purple" | "white" | "disabled";
export type BackgroundColors = "grey" | "blue" | "purple" | "white";

export const useBackgroundColor = (color: BackgroundColors | ColorScheme) => {
  const theme = useTheme();
  switch (color) {
    case "blue":
      return theme.palette.primary.dark;
    case "white":
      return theme.palette.background.paper;
    case "purple":
      return theme.palette.primary.main;
    default:
      return theme.palette.background.default;
  }
};

export const useLinkColor = (color: ColorScheme) => {
  const theme = useTheme();
  switch (color) {
    case "blue":
    case "purple":
      return theme.palette.primary.contrastText;
    default:
      return theme.palette.primary.main;
  }
};

export const useTextColor = (color: ColorScheme) => {
  const theme = useTheme();
  switch (color) {
    case "blue":
    case "purple":
      return theme.palette.primary.contrastText;
    case "disabled":
      return theme.palette.text.disabled;
    default:
      return theme.palette.text.primary;
  }
};

export const useLinkDecorationColor = (color: ColorScheme) => {
  // todo: can we re-use the font color and add an alpha of 0.4 here? that would age better
  switch (color) {
    case "blue":
    case "purple":
      return "rgba(255, 255, 255, 0.4)";
    default:
      return "rgba(78, 85, 162, 0.4)";
  }
};

export function useColorScheme(
  color: ColorScheme,
  sx?: SxProps<Theme>
): SxProps<Theme> {
  return {
    backgroundColor: useBackgroundColor(color),
    color: useTextColor(color),
    "a.MuiTypography-root": {
      color: useLinkColor(color),
      textDecorationColor: useLinkDecorationColor(color),
      textUnderlineOffset: "0.4em",
    },
    ...sx,
  };
}

import { Box, Container } from "@mui/material";
import React from "react";
import {BackgroundColors, useBackgroundColor} from "@/styles/colors";

type Props = {
  topColor: BackgroundColors;
  bottomColor: BackgroundColors;
  variant?: "wave1" | "wave2";
};

function generateLineColor(bottomColor: BackgroundColors) {
  if (bottomColor === "purple" || bottomColor === "blue") {
    return "#999FE0"; // Light/Primary/Light
  }

  return "#B0B0A7"; // Light/Other/Divider
}

function Wave1({ bottomColor }: { bottomColor: BackgroundColors }) {
  return (
    <svg
      viewBox="0 0 1402 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="150"
    >
      <path
        d="M1005 57.9611C1291.5 -5.29736 1413 30.7026 1537 57.9611V114.72H1V63.5358C504.216 -102.176 745.088 115.349 1005 57.9611Z"
        fill={useBackgroundColor(bottomColor)}
        className="background"
      />
      <path
        d="M1539 40.0487C1539 40.0487 1438.08 10 1289 10C992.396 10 970.39 128.246 545.647 25.6956C220.433 -52.8244 1 80.9999 1 80.9999"
        stroke={generateLineColor(bottomColor)}
        strokeWidth="1.5"
        className="line"
      />
    </svg>
  );
}

function Wave2({ bottomColor }: { bottomColor: BackgroundColors }) {
  return (
    <svg
      viewBox="0 0 1536 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="115"
      preserveAspectRatio="none"
    >
      <path
        d="M532 68.2584C245.5 5 124 41 0 68.2584V125.017H1536V73.8331C1032.78 -91.8782 791.912 125.646 532 68.2584Z"
        fill={useBackgroundColor(bottomColor)}
        className="background"
      />
      <path
        d="M0 46.3704C0 46.3704 124.315 19.2998 273.198 19.2998C569.416 19.2998 567.87 151.105 992.061 29.3262C1316.85 -63.9164 1536 95 1536 95"
        stroke={generateLineColor(bottomColor)}
        strokeWidth="1.5"
        className="line"
      />
    </svg>
  );
}

function WaveDivider({ topColor, bottomColor, variant }: Props) {
  return (
    <Container maxWidth={false} disableGutters sx={{ position: "relative" }}>
      <Box
        sx={{
          bgcolor: useBackgroundColor(topColor),
          overflow: "hidden",
          display: "flex",
          "& svg": {
            position: "relative",
            display: "flex",
            width: "100%",
            height: 150,
            minWidth: 1402,
          },
        }}
      >
        {variant === "wave1" ? (
          <Wave1 bottomColor={bottomColor} />
        ) : (
          <Wave2 bottomColor={bottomColor} />
        )}
      </Box>
    </Container>
  );
}

WaveDivider.defaultProps = {
  variant: "wave2",
};

export default WaveDivider;

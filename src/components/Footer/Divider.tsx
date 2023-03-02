import React from "react";
import { alpha } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function Divider() {
  return (
    <Box
      sx={{
        height: "1px",
        border: "1px solid",
        borderColor: alpha("rgb(176, 176, 167)", 0.4),
        marginY: 1,
      }}
    />
  );
}

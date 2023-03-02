import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Bounded from "@/components/Bounded";
import Slogan from "@/components/Footer/Slogan";
import WaveDivider from "@/components/WaveDivider";
import Divider from "./Divider";

function Footer() {
  return (
    <Bounded
      as="footer"
      sx={{ bgcolor: "background.paper", paddingTop: 0 }}
      className="rs_skip"
    >
      <WaveDivider topColor="grey" bottomColor="white" variant="wave1" />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "column", "row"],
            justifyContent: ["space-between"],
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: [2, 5],
              flexDirection: ["column", "column", "row"],
              alignItems: ["inherit", "inherit", "center"],
              marginY: [1, 4],
            }}
          >
            <Slogan slogan="Thanks for making the world more accessible!" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: ["inherit", "inherit", "inherit", "center"],
              marginBottom: 1,
              gap: [1, 1, 1, 2],
              flexDirection: ["column", "column", "column", "row"],
            }}
          >
              {/* Some links go here, no need to implement these */}
          </Box>
        </Box>
        <Box sx={{ marginBottom: [1, 2] }}>
          <Typography component="span" variant="subtitle2">
            Copyright text
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: ["column", "column", "row"],
            gap: 2,
            marginY: 5,
          }}
        >
          {/* some more links go here, no need to implement these */}
        </Box>
      </Container>
    </Bounded>
  );
}

export default Footer;

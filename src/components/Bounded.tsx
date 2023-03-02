import React from "react";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
  as: React.ElementType;
  sx?: SxProps<Theme>;
  className?: string;
};

function Bounded({ as, children, sx, className }: Props) {
  return (
    <Box className={className} component={as} sx={{ paddingY: 8, ...sx }}>
      {children}
    </Box>
  );
}

Bounded.defaultProps = {
  sx: undefined,
  className: undefined,
};

export default Bounded;

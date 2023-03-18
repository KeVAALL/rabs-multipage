import { Typography } from "@mui/material";
import classNames from "classnames";

export default function TypographyUtil({ children, variant, ...options }) {
  return (
    <Typography variant={variant} sx={{ ...options }} {...options}>
      {children}
    </Typography>
  );
}

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const largeDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};

export const largeUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("lg"));
};

export const mediumDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const mediumUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
};

export const smallDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};

export const smallUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("sm"));
};

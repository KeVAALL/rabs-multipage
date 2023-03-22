import { Box } from "@mui/material";

export function HorizontalFlex({ children, ...options }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          ...options,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export function HorizontalFlexCenter({ children, ...options }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...options,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export function VerticalFlex({ children, ...options }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ...options,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export function VerticalFlexCenter({ children, ...options }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "auto",

          ...options,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export function TextAlignCenter({ children }) {
  return <Box sx={{ textAlign: "center" }}>{children}</Box>;
}

import { Box } from "@mui/material";

export function PaddingBoxSmall({ children }) {
  return (
    <>
      <Box sx={{ p: 2 }}>{children}</Box>
    </>
  );
}

export function PaddingBoxMedium({ children }) {
  return (
    <>
      <Box sx={{ p: 4 }}>{children}</Box>
    </>
  );
}

export default function PaddingBoxLarge({ children }) {
  return (
    <>
      <Box sx={{ p: 6 }}>{children}</Box>
    </>
  );
}

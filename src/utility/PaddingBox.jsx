import { Box } from "@mui/material";

export default function PaddingBoxLarge({ children }) {
  return (
    <>
      <Box sx={{ p: 6 }}>{children}</Box>
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

export function PaddingBoxSmall({ children }) {
  return (
    <>
      <Box sx={{ p: 3 }}>{children}</Box>
    </>
  );
}

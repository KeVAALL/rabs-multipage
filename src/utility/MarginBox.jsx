import { Box } from "@mui/system";

export default function MarginBoxMedium({ children }) {
  return (
    <>
      <Box sx={{ mt: 4, mb: 4 }}>{children}</Box>
    </>
  );
}

export function MarginTop({ children }) {
  return (
    <>
      <Box sx={{ mt: 3 }}>{children}</Box>
    </>
  );
}

export function MarginBoxLarge({ children }) {
  return (
    <>
      <Box sx={{ mt: 6, mb: 6 }}>{children}</Box>
    </>
  );
}

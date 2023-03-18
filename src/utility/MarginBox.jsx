import { Box } from "@mui/system";

export default function MarginBoxMedium({ children }) {
  return (
    <>
      <Box sx={{ mt: 3, mb: 3 }}>{children}</Box>
    </>
  );
}

export function MarginTop({ children }) {
  return (
    <>
      <Box sx={{ mt: 2.5 }}>{children}</Box>
    </>
  );
}

export function MarginBoxLarge({ children }) {
  return (
    <>
      <Box sx={{ mt: 5, mb: 5 }}>{children}</Box>
    </>
  );
}

import { Box } from "@mui/system";

export default function MarginBoxMedium({ children, ...options }) {
  return (
    <>
      <Box sx={{ ...options, mt: 4, mb: 4 }}>{children}</Box>
    </>
  );
}

export function MarginTop({ children, ...options }) {
  return (
    <>
      <Box sx={{ mt: 3, ...options }}>{children}</Box>
    </>
  );
}

export function MarginBoxLarge({ children, ...options }) {
  return (
    <>
      <Box sx={{ mt: 6, mb: 6, ...options }}>{children}</Box>
    </>
  );
}

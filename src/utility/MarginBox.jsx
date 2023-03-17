import { Box } from "@mui/system";

export default function MarginBox({ children }) {
  return (
    <>
      <Box sx={{ mt: 2.5, mb: 2.5 }}>{children}</Box>
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

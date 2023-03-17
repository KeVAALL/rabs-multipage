import { Box } from "@mui/system";

export default function MarginBox({ children }) {
  return (
    <>
      <Box sx={{ mt: 6.5 }}>{children}</Box>
    </>
  );
}

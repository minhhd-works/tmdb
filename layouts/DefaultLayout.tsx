import { Box } from "@mantine/core";

interface Props {
  children: any;
}

const DefaultLayout: any = ({ children }: Props) => (
  <Box
    style={{
      maxWidth: '100%'
    }}
  >
    {children}
  </Box>
);

export default DefaultLayout;

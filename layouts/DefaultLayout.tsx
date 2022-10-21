import { Box } from '../components/Box';

interface Props {
  children: any;
}

const DefaultLayout: any = ({ children }: Props) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    {children}
  </Box>
);

export default DefaultLayout;

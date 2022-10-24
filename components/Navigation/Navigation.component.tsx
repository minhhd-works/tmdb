import {
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import DropdownMenu, { DropdownLink } from './DropdownMenu.component';
import useStyles from './Navigation.styles';

const mockdata = [
  {
    title: 'Popular',
    link: '/movie',
  },
  {
    title: 'Now Playing',
    link: '/movie',
  },
  {
    title: 'Upcoming',
    link: '/movie',
  },
  {
    title: 'Top Rated',
    link: '/movie',
  },
];

const Navigation = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header
        height={60}
        px="md"
      >
        <Group
          position="apart"
          sx={{ height: '100%' }}
        >
          <Title color='blue.9' order={1}>TMDB</Title>

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Anchor
              href="/"
              className={classes.link}
            >
              Home
            </Anchor>
            <DropdownMenu
              menuName="Movies"
              linkData={mockdata}
            />
            <DropdownMenu
              menuName="TV Shows"
              linkData={mockdata}
            />
            <DropdownMenu
              menuName="People"
              linkData={mockdata}
            />
            <DropdownMenu
              menuName="More"
              linkData={mockdata}
            />
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea
          sx={{ height: 'calc(100vh - 60px)' }}
          mx="-md"
        >
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Anchor
            href="/"
            className={classes.link}
          >
            Home
          </Anchor>

          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks}
          >
            <Center inline>
              <Box
                component="span"
                mr={5}
              >
                Popular
              </Box>
              <IconChevronDown
                size={16}
                color={theme.fn.primaryColor()}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            <DropdownLink
              data={mockdata}
              classes={classes}
            />
          </Collapse>
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group
            position="center"
            grow
            pb="xl"
            px="md"
          >
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navigation;

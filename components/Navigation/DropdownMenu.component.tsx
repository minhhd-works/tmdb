import {
  Anchor,
  Box,
  Center,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { MenuOption } from './DropDownMenu.interface';
import useStyles from './Navigation.styles';

type Props = {
  linkData: MenuOption[];
  menuName: string;
}

interface IDropdownLink {
  data: MenuOption[];
  classes: any;
}

export const DropdownLink = ({ data, classes }: IDropdownLink) => {
  return (
    <>
      {data.map((item) => (
        <UnstyledButton
          className={classes.subLink}
          key={item.title}
        >
          <Group
            noWrap
            align="flex-start"
          >
            <div>
              <Text
                size="md"
                weight={500}
              >
                {item.title}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      ))}
    </>
  );
};

const DropdownMenu = ({ linkData, menuName }: Props) => {
  const { classes } = useStyles();

  return (
    <HoverCard
      width={250}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCard.Target>
        <Anchor
          href="#"
          className={classes.link}
        >
          <Center inline>
            <Box
              component="span"
              mr={5}
            >
              {menuName}
            </Box>
          </Center>
        </Anchor>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <SimpleGrid
          cols={1}
          spacing={0}
        >
          <DropdownLink classes={classes} data={linkData} />
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default DropdownMenu;

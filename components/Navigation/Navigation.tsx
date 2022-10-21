import { Button, Link, Navbar, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import { AcmeLogo } from '../Logo';

const collapseItems = [
  'Features',
  'Customers',
  'Pricing',
  'Company',
  'Legal',
  'Team',
  'Help & Feedback',
  'Login',
  'Sign Up',
];

const Navigation: NextPage = () => {
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      variant="sticky"
    >
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          css={{
            '@smMin': {
              display: 'none',
            },
          }}
        />
        <AcmeLogo />
        <Text
          b
          color="inherit"
          size="$xl"
          onClick={() => Router.push('/')}
        >
          TMDB
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn="sm"
        variant="underline"
      >
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link
          isActive
          href="#"
        >
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn="xs">
        <Navbar.Link
          color="inherit"
          href="#"
        >
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button
            auto
            flat
            as={Link}
            href="#"
          >
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse
        css={{
          overflowY: 'auto',
          '@smMin': {
            display: 'none',
          },
        }}
      >
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

import React from 'react';
import {
  Menu,
  Icon,
  Image,
  Dropdown,
  Container,
  Sticky,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Menu>
      <Menu.Item as={Link} to="/dashboard" name="dashboard">
        統計
      </Menu.Item>
    </Menu>
  );
}

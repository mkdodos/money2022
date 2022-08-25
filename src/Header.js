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

import { useAuth } from './contexts/AuthContext';

import { useHistory } from 'react-router-dom';

export default function Header() {
  const [activeItem, setActiveItem] = React.useState('');

  const { currentUser, logout } = useAuth()

  const history = useHistory();
  function handleClick(e, { name }) {
    setActiveItem(name);
  }

  async function handleLogout() {
    // setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      // setError("Failed to log out")
    }
  }

  return (
    <Menu secondary pointing>
      {/* <Menu.Item as={Link} to="/tictactoe">
        TicTacToe
      </Menu.Item> */}
      <Menu.Item
        as={Link}
        to="/accounts"
        name="accounts"
        onClick={handleClick}
        active={activeItem === 'accounts'}
      >
        帳戶
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/cates"
        name="cates"
        onClick={handleClick}
        active={activeItem === 'cates'}
      >
        類別
      </Menu.Item>

      <Menu.Item as={Link} to="/balances">
        收支
      </Menu.Item>
      <Menu.Item as={Link} to="/stocks">
        股票
      </Menu.Item>
      {/* <Menu.Item as={Link} to="/books">
        書本
      </Menu.Item> */}
      <Menu.Menu position="right">
        {currentUser ? (
          <Menu.Item name="" onClick={handleLogout}>
            <Icon name="sign-out" />
          </Menu.Item>
        ) : (
          <Menu.Item name="login" as={Link} to="/login">
            Login
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}

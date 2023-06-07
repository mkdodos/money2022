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

// import { useAuth } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';

import { useHistory } from 'react-router-dom';

export default function Header() {
  const [activeItem, setActiveItem] = React.useState('');

  const { currentUser, logout } = useAuth();

  const history = useHistory();
  function handleClick(e, { name }) {
    setActiveItem(name);
  }

  async function handleLogout() {
    // setError("")

    try {
      await logout();
      history.push('/login');
    } catch {
      // setError("Failed to log out")
    }
  }

  return (
    // Menu secondary Dropdown simple
    // 會產生 gap 變成 Dropdown 內的 item 不好點
    <Menu pointing secondary>
      {/* 下拉選單 */}
      <Dropdown item icon="setting">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/accounts" name="accounts">
            帳戶
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/cates">
            類別
          </Dropdown.Item>

          <Dropdown.Item as={Link} to="/cates-note">
            記事類別
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/stocks">
            股票
          </Dropdown.Item>

          <Dropdown.Item as={Link} to="/dashboard/query">
            查詢
          </Dropdown.Item>

          {/* <Dropdown.Divider /> */}
          {/* <Dropdown.Header>Export</Dropdown.Header> */}
          {/* <Dropdown.Item>Share</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>

      {/* 特定使用者選單 */}
      {currentUser?.email == 'mkdodos@gmail.com' && (
        <>
          <Menu.Item
            as={Link}
            to="/mortgages"
            name="mortgages"
            onClick={handleClick}
            active={activeItem === 'mortgages'}
          >
            房貸
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/credits"
            name="credits"
            onClick={handleClick}
            active={activeItem === 'credits'}
          >
            信用卡
          </Menu.Item>
        </>
      )}
      {/* 一般使用者選單 */}

      <Menu.Item
        as={Link}
        to="/dashboard"
        name="dashboard"
        onClick={handleClick}
        active={activeItem === 'dashboard'}
      >
        統計
      </Menu.Item>

      {/* <Menu.Item
        as={Link}
        to="/scores"
        name="scores"
        onClick={handleClick}
        active={activeItem === 'scores'}
      >
        分數
      </Menu.Item> */}

      {/* <Menu.Item
        as={Link}
        to="/school"
        name="school"
        onClick={handleClick}
        active={activeItem === 'school'}
      >
        學校
      </Menu.Item> */}

      {/* <Menu.Item
        as={Link}
        to="/food"
        name="food"
        onClick={handleClick}
        active={activeItem === 'food'}
      >
        點餐
      </Menu.Item> */}

      <Menu.Item
        as={Link}
        to="/trans"
        name="trans"
        onClick={handleClick}
        active={activeItem === 'trans'}
      >
        轉帳
      </Menu.Item>

      <Menu.Item
        as={Link}
        to="/balances"
        name="balances"
        onClick={handleClick}
        active={activeItem === 'balances'}
      >
        收支
      </Menu.Item>

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

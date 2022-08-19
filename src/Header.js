import React from "react";
import {
  Menu,
  Icon,
  Image,
  Dropdown,
  Container,
  Sticky,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeItem, setActiveItem] = React.useState("");

  function handleClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Menu secondary pointing>
       <Menu.Item as={Link} to="/tictactoe">
        TicTacToe
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/accounts"
        name="accounts"
        onClick={handleClick}
        active={activeItem === "accounts"}
      >
        帳戶
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/cates"
        name="cates"
        onClick={handleClick}
        active={activeItem === "cates"}
      >
        類別
      </Menu.Item>
     
      <Menu.Item as={Link} to="/balances">
        收支
      </Menu.Item>
      <Menu.Item as={Link} to="/stocks">
        股票
      </Menu.Item>
    </Menu>
  );
}

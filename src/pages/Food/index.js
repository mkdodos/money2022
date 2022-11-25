import React from 'react'
import EditForm from './component/EditForm'
import Cart from './component/Cart'
import ProdList from './component/ProdList'
export default function index() {
  const rows = [
    {
      id: '1',
      name: '法式鮮蔬湯品',
      price: 40,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/caesar-salad-with-spicy-fried-chicken-filet_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '2',
      name: '鮮蝦輕沙拉',
      price: 140,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/mushroom-angus-beef-burger_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '3',
      name: '牛肉堡',
      price: 130,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/hamburger_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '4',
      name: '牛肉堡4',
      price: 30,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/big-mac_832x822_2:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '5',
      name: '豬肉堡',
      price: 10,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/egg-burger-with-sausage_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    // {
    //   id: '5',
    //   name: '牛肉堡5',
    //   price: 50,
    //   image:image
    // },
    // {
    //   id: '6',
    //   name: '豬肉堡6',
    //   price: 60,
    // },
  ];


  return (
    <div>
      <ProdList rows={rows}/>
      {/* <EditForm/>
      <Cart/> */}
     
    </div>
  )
}

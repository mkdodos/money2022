import AutoTableFirebase from '../components/AutoTableFirebase';
export default function Stocks() {
  const schema = [
    { name: 'name', text: '名稱', type: 'text' },
    { name: 'qty', text: '股數', type: 'number' },
    { name: 'price', text: '現價', type: 'number' },
    { name: 'cost', text: '成本', type: 'number' }
  ];
  const defalutItem = {
    name:'',
    qty:'',
    price:'',
    cost:''
  }

  const collectionName = 'stocks'
  return <AutoTableFirebase schema={schema} defalutItem={defalutItem}
  collectionName={collectionName}
  />;
}

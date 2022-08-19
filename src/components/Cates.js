import AutoTable from "./AutoTable";
export default function Cates() {
  const schema = [
    // {
    //   name: '欄位名稱',
    //   text: '表格標題列欄位文字, 表單 placeholder 文字',
    //   type: '表單輸入項類型',
    // },
    {
      name: 'date',
      text: '日期',
      type: 'date',
    },
    {
      name: 'title',
      text: '項目',
      type: 'text',
    },
    {
      name: 'expense',
      text: '支出',
      type: 'number',
    },
    {
      name: 'name',
      text: '股票名稱',
      type: 'text',
    },
   
    
  ];

  const defalutItem = {
    date: new Date().toISOString().slice(0, 10),
    title: '',
    expense: '',
    name: '',
   
    
  };

  return <AutoTable schema={schema} defalutItem={defalutItem} />
}
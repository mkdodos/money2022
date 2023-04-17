import React, { useState } from 'react';
import {
  Label,
  Input,
  Icon,
  Button,
  Header,
  Modal,
  List,
} from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';
import { db } from '../../utils/firebase';

export default function TransList({ rows, options, user }) {
  // 帳戶 id
  const [from, setFrom] = useState();
  // 帳戶名稱
  const [fromAcc, setFromAcc] = useState();
  const [amount, setAmount] = useState('');
  const [to, setTo] = useState();
  const [toAcc, setToAcc] = useState();
  const [open, setOpen] = useState(false);

  function handleClick() {
    // 取得帳戶餘額
    db.collection('accounts')
      .doc(from)
      .get()
      .then((doc) => {
        // 更新帳戶餘額
        db.collection('accounts')
          .doc(from)
          .update({ balance: Number(doc.data().balance) - amount });

        // console.log(new Date().toISOString().slice(0, 10));
        // 新增收支
        db.collection('balances').add({
          account: doc.data(),
          cate: '',
          date: new Date().toISOString().slice(0, 10),
          expense: amount,
          title: '轉出至' + toAcc,
          user: user,
          type: '轉帳',
        });
      });

    // 取得帳戶餘額
    db.collection('accounts')
      .doc(to)
      .get()
      .then((doc) => {
        // 更新帳戶餘額
        db.collection('accounts')
          .doc(to)
          .update({ balance: Number(doc.data().balance) + Number(amount) })
          .then(() => {
            // console.log(amount);
          });

        // 新增收支
        db.collection('balances').add({
          account: doc.data(),
          cate: '',
          date: new Date().toISOString().slice(0, 10),
          income: amount,
          title: '從' + toAcc + '轉入',
          user: user,
          type: '轉帳',
        });
      });

    setOpen(true);

    // console.log(from);

    // console.log(toAcc);
  }

  function onFromChange(e, obj) {
    // 設定下拉值
    setFrom(obj.value);

    // 帳戶名稱
    const accName = obj.options.filter((option) => option.key == obj.value)[0]
      .text;
    setFromAcc(accName);
    // 依下拉值設定該帳戶資料
    // const acc = rows.filter((row) => row.name == obj.value);
    // setFromAcc(acc[0]);
  }

  function onToChange(e, obj) {
    setTo(obj.value);

    // 帳戶名稱
    const accName = obj.options.filter((option) => option.key == obj.value)[0]
      .text;
    setToAcc(accName);

    // const acc = rows.filter((row) => row.name == obj.value);
    // setToAcc(acc[0]);
  }

  function handleModalClose() {
    setAmount('');
    setFrom('');
    setTo('');
    setOpen(false);
  }

  return (
    <>
      <Modal
        // closeIcon
        open={open}
        // onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content="轉帳成功 !" />
        <Modal.Content>
          <div>
            <Label basic color="teal" size="large">
              {fromAcc}
            </Label>
            <Icon name="arrow right" />
            <Label size="large" color="teal">
              ${amount}
            </Label>{' '}
            <Icon name="arrow right" />{' '}
            <Label basic color="teal" size="large">
              {toAcc}
            </Label>{' '}
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={handleModalClose}>
            <Icon name="checkmark" /> 關閉
          </Button>
        </Modal.Actions>
      </Modal>

      <div className="trans-container">
        <div className="trans-card">
          <div className="header">轉帳作業</div>
          <div className="acc">
            <Trans rows={options} onChange={onFromChange} value={from} />
          </div>
          <div className="acc">
            <Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              label="$"
              fluid
              placeholder="轉帳金額"
            />
          </div>
          <div className="acc">
            <Trans rows={options} onChange={onToChange} value={to} />
          </div>
          <div className="acc footer">
            <Button fluid color="teal" onClick={handleClick}>
              確定
            </Button>
          </div>
        </div>
      </div>
    </>

    // <Trans rows={rows} />
    // <Input placeholder="$ 轉帳金額" />
  );
}

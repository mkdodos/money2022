import { Grid, Segment } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { db } from '../../../utils/firebase';

import { useAuth } from '../../../contexts/AuthContext';

const Accounts = ({rows, accountClick, activeAccount}) => {
  const { currentUser } = useAuth();
  // const [topAccounts, setTopAccounts] = useState([]);
  // 選取帳戶
  // const [activeAccount, setActiveAccount] = useState();
  // useEffect(() => {
  //   db.collection('accounts')
  //     .where('user', '==', currentUser.email)
  //     .limit(3)
  //     .get()
  //     .then((snapshot) => {
  //       const data = snapshot.docs.map((doc) => {
  //         return { ...doc.data(), id: doc.id };
  //       });
  //       setTopAccounts(data);
  //     });
  // }, []);

  return (
    <Grid columns={3}>
      {rows.map((row, i) => (
        <Grid.Column key={row.id}>
          <Segment
            textAlign="center"
            color="teal"
            // 點選反白
            inverted={activeAccount?.name === row.name}
            onClick={() => {
              accountClick(row);
            }}
          >
            {row.name}{row.balance}
          </Segment>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Accounts;

import { Grid, Segment, Icon } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { floor } from 'lodash';

const Accounts = ({ rows, activeAccount, accountClick }) => {
  const [range, setRange] = useState(0);

  // 帳戶一次顯示幾個
  const accountPerPage = 4;

  function handleSetRange() {
    // const pages = Math.floor(rows.length / accountPerPage);
    let pages = rows.length / accountPerPage;
    // 判斷是否整除,決定要顯示幾頁
    // 假設有6筆,每次顯示3,就會整除,顯示2頁
    // 假設有6筆,每次顯示4,不會整除,顯示2頁
    pages = Number.isInteger(pages) ? pages : Math.ceil(pages);
    console.log(Number.isInteger(pages));
    setRange((prev) => {
      if (prev < pages - 1) return prev + 1;
      return 0;
    });
  }

  return (
    <>
      <Segment.Group horizontal>
        {rows
          .slice(
            accountPerPage * range,
            accountPerPage * range + accountPerPage
          )
          .map((row, i) => (
            <Segment
              key={row.id}
              textAlign="center"
              color="teal"
              // 點選反白
              inverted={activeAccount?.name === row.name}
              onClick={() => {
                accountClick(row);
              }}
            >
              {row.name}
            </Segment>
          ))}
        <Segment
          textAlign="center"
          basic
          color="olive"
          onClick={handleSetRange}
        >
          <Icon name="arrow right" />
        </Segment>
      </Segment.Group>
    </>

    // <Grid columns={3}>
    //   {rows.map((row, i) => (
    //     <Grid.Column key={row.id}>
    //       <Segment
    //         textAlign="center"
    //         color="teal"
    //         // 點選反白
    //         inverted={activeAccount?.name === row.name}
    //         onClick={() => {
    //           accountClick(row);
    //         }}
    //       >
    //         {row.name}
    //       </Segment>
    //     </Grid.Column>
    //   ))}
    // </Grid>
  );
};

export default Accounts;

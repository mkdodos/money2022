import React, { useEffect, useState } from 'react';
// import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Button, Statistic } from 'semantic-ui-react';
import { db } from '../utils/firebase';

import numberFormat from '../utils/numberFormat';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    db.collection('balances').where('cate','==','股息')
    .get().then(snapshot=>{
      let total = 0 ;
      snapshot.docs.map(doc=>{
        total += doc.data().income * 1
      })
      setBonus(total)
    })
    
  }, []);

  // console.log(currentUser);
  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      {/* <pre>{JSON.stringify(currentUser)}</pre> */}
      {/* <div>Dashboard</div> */}

      <Statistic color="green">
        <Statistic.Value>{numberFormat(bonus)}</Statistic.Value>
        <Statistic.Label>Bonus</Statistic.Label>
      </Statistic>

    

      {/* <strong>Email:</strong> {currentUser?.email} */}
      {/* <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button> */}
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        
      </div> */}
    </>
  );
}

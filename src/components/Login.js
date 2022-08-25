import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/balances');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input ref={emailRef} defaultValue="mkdodos@gmail.com"></input>
          {/* <input ref={emailRef} ></input> */}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input ref={passwordRef} defaultValue="123456"></input>
          {/* <input ref={passwordRef} ></input> */}
        </Form.Field>
        <Button type="submit" size="large" color="blue">
          Mark
        </Button>
      </Form>

      <Button
        basic
        floated="right"
        onClick={async () => {
          await login('dada@gmail.com', '123456');
          history.push('/balances');
        }}
        size="large"
        color="blue"
      >
        Dada
      </Button>
    </>
  );
}

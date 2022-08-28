import {
  Form,
  Modal,
  Container,
  Button,
  Grid,
  Segment,
} from "semantic-ui-react";
import React from "react";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory()
  const email = React.useRef();
  const password = React.useRef();
  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={3} computer={5}></Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={6}>
            <Segment>
              <Form size="large">
                <Form.Field>
                  <label>Email</label>
                  <input ref={email} defaultValue="mkdodos@gmail.com"></input>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input ref={password} defaultValue="123456"></input>
                </Form.Field>
                <Button
                fluid
                  onClick={() => {
                    auth
                      .signInWithEmailAndPassword(
                        email.current.value,
                        password.current.value
                      )
                      .then((userCrendential) => {
                        history.push('/balances')
                        console.log(userCrendential.user.email);
                      });
                    // console.log(password.current.value);
                  }}
                  size="large"
                  color="blue"
                >
                  Mark
                </Button>
                <Button
                fluid
                  basic
                  floated="right"
                  onClick={() => {
                    auth
                      .signInWithEmailAndPassword("dada@gmail.com", "123456")
                      .then((userCrendential) => {
                        console.log(userCrendential.user.email);
                        history.push('/user')
                      });
                  }}
                  size="large"
                  color="blue"
                >
                  Dada
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={5}></Grid.Column>
        </Grid.Row>
      </Grid>
      <Button fluid>Fits to Container</Button>
    </Container>
  );
}

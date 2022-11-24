import React from 'react';
import {
  Button,
  Input,
  Form,
  Grid,
  Menu,
  Image,
  Label,
  Header,
  Segment,
  Icon,
  Divider,
} from 'semantic-ui-react';

import image from '../../../img/image.png';

export default function EditForm() {
  return (
    <div>
      

      <Image src={image} size="small" color="pink" />
     <Divider/>
      {/* <Menu widths={3}>
      

        <Menu.Item>
          <Label circular>-</Label>
        </Menu.Item>

        <Menu.Item name="testimonials">0</Menu.Item>
        <Menu.Item name="features">
          <Label circular color="pink">
            +
          </Label>
        </Menu.Item>
      </Menu> */}

      {/* <Label circular size="large">
        -
      </Label>
      
      <Label circular size="large" color="pink">
        <Icon name="plus" />
      </Label> */}

<Button circular icon="minus"  />
<Button basic>0</Button>
<Button circular icon="plus" color="pink" />


      {/* <Button color="pink" circular>+</Button> */}
      {/* <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>           
            <Button>+</Button>
          </Grid.Column>
          <Grid.Column>
            <Input fluid />
          </Grid.Column>
          <Grid.Column>            
            <Button>+</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Form>
        <Form.Field inline>
          <Button>+</Button>
          <Input />

          <Button>-</Button>
        </Form.Field>
      </Form> */}
    </div>
  );
}

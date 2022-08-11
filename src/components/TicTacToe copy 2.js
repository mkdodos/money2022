import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
class Square extends React.Component {
  // 初始化 state
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <Button
        onClick={() => {
          this.props.onClick()
          // this.setState({ value: 'X' });
        }}
      >
        {this.props.value}
        {/* 顯示的值改成 state */}
        {/* {this.state.value} */}
      </Button>
    );
  }
}

/********************************************************/

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squaresCopy = this.state.squares.slice();
    squaresCopy[i] = 'X'
    this.setState({squares:squaresCopy})
  }

  renderSquare(i) {
    // return <Square value={i} />;
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    return (
      <Grid columns="equal" textAlign="center">
        <Grid.Row>
          <Grid.Column>{this.renderSquare(0)}</Grid.Column>
          <Grid.Column>{this.renderSquare(1)}</Grid.Column>
          <Grid.Column>{this.renderSquare(2)}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{this.renderSquare(3)}</Grid.Column>
          <Grid.Column>{this.renderSquare(4)}</Grid.Column>
          <Grid.Column>{this.renderSquare(5)}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{this.renderSquare(6)}</Grid.Column>
          <Grid.Column>{this.renderSquare(7)}</Grid.Column>
          <Grid.Column>{this.renderSquare(8)}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

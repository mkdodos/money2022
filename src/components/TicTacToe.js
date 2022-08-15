import React from 'react';
import { Grid } from 'semantic-ui-react';

class Square extends React.Component {
  // handleClick() {
  //   console.log('this is class')
  // }
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
    // return (
    //   <button className="square" onClick={()=>this.handleClick()}>
    //     {this.props.value}
    //   </button>
    // );
  }
}

// function Square(props) {
//   function handleClick() {
//     console.log('this is square')
//   }
//   return (

//       <button className='square'  onClick={handleClick}>
//         {props.value}
//       </button>

//   );
// }

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squaresCopy = this.state.squares.slice();
    squaresCopy[i] = 'X';
    this.setState({
      squares: squaresCopy,
    });
    // this.setState({ value: 'X' });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }
  render() {
    return (
      <Grid>
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
          {/* <Grid.Column>{this.renderSquare(6)}</Grid.Column> */}
          <Grid.Column>{this.renderSquare(7)}</Grid.Column>
          <Grid.Column>{this.renderSquare(8)}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

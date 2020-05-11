import React, {Component} from 'react';

const App = () =>(<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

handlePlusButton = () => {
  this.setState({ count: this.state.count + 1})
}

handleMinusButton = () => {
  this.setState({ count: this.state.count - 1})
}

  render() {
  return (
    <React.Fragment>
      <div>count : { this.state.count }</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}
//他の場所で読み込んで使えるようにexport
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code>Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

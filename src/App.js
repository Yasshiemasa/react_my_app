//必須
import React from 'react';

// //Appクラス = Appコンポーネント(カスタムタグ)
// class App extends Component {
//   render() {
//    return (
//    <React.Fragment>
//      <label htmlFor="bar">bar</label>
//      <input type="text" onChange={() => {console.log("I am clicked")}} />
//    </React.Fragment>
//    )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
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

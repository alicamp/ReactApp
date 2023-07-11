import logo from './logo.svg';
import './App.css';
import PropTypes, { checkPropTypes } from 'prop-types';
import { Component } from 'react';

// class App extends Component {

//   static propTypes = {
//     employees: PropTypes.array.isRequired,
//     addEmployee: PropTypes.func.isRequired,
//     getEmployee: PropTypes.func.isRequired,
//     editEmployee: PropTypes.func.isRequired,
//     deleteEmployee: PropTypes.func.isRequired
//   }

// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi AliAbbas
         <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="shopping-list">
        <h1>Shopping List for this.props.name</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Calendar} from './Calendar';


let cal = {
  Month:"Janvier",
  NbDays:30

} 

const App: React.FC = () => {
  return (
    <div className="App">
      <Calendar Month={cal.Month} NbDays = {cal.NbDays}  />
      {/* <header className=  "App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
      <button type="button" className="btn btn-primary" >Primary</button> */}
    </div>
  );
}

export default App;

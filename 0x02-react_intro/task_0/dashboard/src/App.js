import logo from './HolbertonLogo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="HR-red"></hr>
      <div className="App-body">
        <p className="Body-p">Login to access the full dashboard</p>
      </div>
      <hr className="HR-red"></hr>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;

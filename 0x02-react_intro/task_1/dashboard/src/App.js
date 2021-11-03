import logo from './HolbertonLogo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="HR-red"></hr>
      <body className="App-body">
        <p className="Body-p">Login to access the full dashboard</p>
      </body>
      <hr className="HR-red"></hr>
      <footer className="App-footer">
        <p>Copyright - {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;

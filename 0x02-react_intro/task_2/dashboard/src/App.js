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
      <div className="App-body">
          <p className="Body-p">Login to access the full dashboard</p>
	  <form className="Login-form">
            <label>Email:<input type="text" name="email" /></label>
            <label>Password:<input type="text" name="password" /></label>
            <button>OK</button>
          </form>
      </div>
      <hr className="HR-red"></hr>
      <footer className="App-footer">
	  <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;

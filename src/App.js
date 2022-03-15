import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Hulk Bluster",
    job:"Smash"

  }
  var person2 = {
    name: "Captain America",
    job: "Dhal"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react app</p>
        <h1 className='' style={style}>Hello hulk: {person.name + " " + person.job}</h1>
        <h2 style = {{backgroundColor:'cyan', color:'yellow'}}>Hello cap: {person2.name + " " + person2.job}</h2>
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

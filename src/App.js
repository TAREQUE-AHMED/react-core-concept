import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Smith', 'Lara', 'Tendulkar', 'Shangakara'];
  const products = [{
    name:'Photoshop', price:'$90.99'
  },
    { name: 'Adobe', price: '$60.98' },
    {name:'PDF Reader', proce: '$10.52'}
  ]
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
        <Product name ={products[0].name}></Product>
        <Person name = {players[2]} job="smash"></Person>
        <Person></Person>
        <Friend name = 'Salman' nayika = 'Sabnur'></Friend>
        <Friend name = 'Hulk' nayika = 'Jeli'></Friend>
        <h5>Component</h5>
        <Person4 name = 'Jack Kallis' job='Actor'></Person4>
        <Person4 name = 'Captain' job= 'Actor'></Person4>
        <Person4 name = 'Thor' job='Thandar'></Person4>
        
      </header>
    </div>
  );
  function Product(props) {
    const ProductStyle = {
      border: '1px solid gray',
      backgroundColor: 'lightgray',
      borderRadius: '5px',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    return (
      <div>
        <h2>{props.name}</h2>
      
      </div>
    )
  }
  function Person(props) {
    const personStyle = {
      border: '2px solid yellow',
      margin: '10px',
      padding: '20px'
    }
    return (
      <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h4>Job: {props.job}</h4>
      
      </div>
    )
  };
  function Friend (props) {
    return (
      <div className="friend">
        <h1>Name:{props.name} </h1>
        <p>Nayika: {props.nayika} </p>
      </div>
    )
  }
  function Person4(props) {
    return (
      <div className="person4">
        <h1>Name: {props.name}</h1>
        <p>Job: {props.job}</p>
     </div>
    )
  }
}

export default App;

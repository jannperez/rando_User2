import './App.css';
import Header from './components/Header'
function App() {
  function handleClick(event) {
   console.log ("The button is firing!")
  }
  return (
    <div className="App">
      <Header />

      <button onClick={ (e) => handleClick(e)}>click me</button>
    
    </div>
  );
}

export default App;


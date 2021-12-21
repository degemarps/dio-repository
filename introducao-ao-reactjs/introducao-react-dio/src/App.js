import './App.css';
import PrimeiroJSX from './primeiroJSX';
import Button from './Button';

function soma(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className="App">
      <p>Olá</p>
      <PrimeiroJSX />
      <Button onClick={ () => soma(10, 20) } name='Degemar Pereira'/>
    </div>
  );
}

export default App;

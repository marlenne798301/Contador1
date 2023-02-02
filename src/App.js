import './App.css';
import BasicExample from './components/BarraSuperior';
import Cartas from './components/Cartas';
import Contador from './components/Contador';

function App() {
  return (
    <div className='App'>
      <BasicExample />
      <Contador />
      <Cartas />
    </div>
  );
}

export default App;
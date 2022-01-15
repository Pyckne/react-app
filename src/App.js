import './App.css';
import './components/NavBar/index.js'
import NavBar from './components/NavBar/index.js';
import ItemListContainer from './components/ItemListContainer/index.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="Sí" />
      </main>
    </div>
  );
}

export default App;

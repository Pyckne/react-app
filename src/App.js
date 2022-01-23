import './App.css';
import './components/NavBar/index.js'
import NavBar from './components/NavBar/index.js';
import ItemListContainer from './components/ItemListContainer/index.js';
import ItemDetailContainer from './components/ItemDetailContainer/index.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="Sí" />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;

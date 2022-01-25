import './App.css';
import './components/NavBar/index.js'
import NavBar from './components/NavBar/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import ItemDetailContainerPage from './components/pages/ItemDetailContainerPage.js';
import CategoryPage from './components/pages/CategoryPage.js';
import NotFoundPage from './components/pages/NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />        
            <Route path="item/:id" element={<ItemDetailContainerPage />} />
            <Route path="category/:id" element={<CategoryPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

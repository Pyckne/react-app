import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/index.js';
import HomePage from './components/pages/HomePage.js';
import ItemDetailContainerPage from './components/pages/ItemDetailContainerPage.js';
import CategoryPage from './components/pages/CategoryPage.js';
import NotFoundPage from './components/pages/NotFoundPage.js';
import CartPage from './components/pages/CartPage.js';
import CheckoutPage from './components/pages/CheckoutPage.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />        
              <Route path="item/:id" element={<ItemDetailContainerPage />} />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

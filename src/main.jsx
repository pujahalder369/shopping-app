import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/cart.jsx';
import { WishlistProvider } from './context/wishList.jsx';
import { AuthProvider } from './context/auth.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </AuthProvider>,
)

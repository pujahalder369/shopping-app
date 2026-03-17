import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/Cart';
import WishList from './pages/WishList';
import LoginPage from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import MobileTab from './components/HomeTopRow/MobileTab';
import FashionPage from './components/HomeTopRow/fashion';
import Electronics from './components/HomeTopRow/Electronics';
import Appliances from './components/HomeTopRow/Appliances';
import Furniture from './components/HomeTopRow/Furniture';
import Jewellery from './components/HomeTopRow/Jewellery';
import Toys from './components/HomeTopRow/Toys';
import Grocery from './components/HomeTopRow/Grocery';
import Bags from './components/HomeTopRow/Bags';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<CartDetails />} />
            <Route path='/wishlist' element={<WishList />} />

            <Route path='/mobile' element={<MobileTab />} />
            <Route path='/fashion' element={<FashionPage />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/furniture' element={<Furniture />} />
            <Route path='/jewellery' element={<Jewellery />} />
            <Route path='/toys' element={<Toys />} />
            <Route path='/grocery' element={<Grocery />} />
            <Route path='/bags' element={<Bags />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

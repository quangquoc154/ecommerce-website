import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop';
import ProductDetail from '~/pages/ProductDetail/ProductDetail';
import Cart from '~/pages/Cart/Cart';
import Checkout from '~/pages/Checkout/Checkout';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';

// Public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/shop', component: Shop },
    { path: '/shop:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

export { publicRoutes };

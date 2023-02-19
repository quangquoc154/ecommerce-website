import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import ProductDetail from '~/pages/ProductDetail/ProductDetail';
import Cart from '~/pages/Cart/Cart';
import Checkout from '~/pages/Checkout/Checkout';
import Login from '~/pages/Login/Login';
import Signup from '~/pages/Signup/Signup';
import Dashboard from '~/admin/Dashboard';
import AddProduct from '~/admin/AddProduct';
import AllProducts from '~/admin/AllProducts';
import Users from '~/admin/Users';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/shop/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout, protected: true },
  { path: '/dashboard', component: Dashboard, protected: true },
  { path: '/dashboard/add-product', component: AddProduct, protected: true },
  { path: '/dashboard/all-products', component: AllProducts, protected: true },
  { path: '/dashboard/users', component: Users, protected: true },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

export { publicRoutes };

import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './component/Routes/Private';
import About from './pages/About';
import Register from './pages/auth/Register';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import Dashboard from './pages/user/Dashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Log-in';
import AdminRoute from './component/Routes/AdminRoute';
import AdminDashBoard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProducts';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import AdminOreders from './pages/Admin/AdminOrders';
import Blogs from './Blog/Blogs';
import BlogLogin from './Blog/pages/login/BlogLogin';
import BlogsHome from './Blog/pages/BlogsHome';
import BlogsRegister from './Blog/pages/register/BlogsRegister';
import Single from './Blog/pages/single/Singl1';
import Write from './Blog/pages/write/Write';
import Settings from './Blog/pages/settings/Settings';

function App() {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs-home" element={<BlogsHome />} />
        <Route path="posts" element={<BlogsHome />} />
        <Route path="blogsregister" element={user ? <BlogsHome /> : <BlogsRegister />} />
        <Route path="blogslogin" element={user ? <BlogsHome /> : <BlogLogin />} />
        <Route path="write" element={user ? <Write /> : <BlogsRegister />} />
        <Route path="settings" element={user ? <Settings /> : <BlogsRegister />} />
        <Route path="post/:id" element={<Single />} />


        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashBoard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOreders />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

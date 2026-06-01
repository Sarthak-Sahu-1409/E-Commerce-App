import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update" element={<h1>Product Update Document</h1>}/>
      <Route path="/logout" element={<h1>Product Logout Document</h1>}/>
      <Route path="/profile" element={<h1>Profile Document</h1>}/>
      </Route>
      
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

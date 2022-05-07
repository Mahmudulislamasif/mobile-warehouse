import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ReqiurwAuth from './Pages/Login/ReqiureAuth/ReqiurwAuth';
import ItemDetails from './Pages/Home/ItemDetails/ItemDetails';
import AddItems from './Pages/Home/AddItems/AddItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={
           <ReqiurwAuth>
           <ItemDetails></ItemDetails>
          </ReqiurwAuth>
        }>
        </Route>
        <Route path='/additems' element={
           <ReqiurwAuth>
           <AddItems></AddItems>
          </ReqiurwAuth>
        }>
        </Route>
        <Route path='/manageitems' element={
         <ReqiurwAuth>
           <ManageItems></ManageItems>
         </ReqiurwAuth>
        }></Route>
        <Route path='/myitems' element={
         <ReqiurwAuth>
            <MyItems></MyItems>
         </ReqiurwAuth>
        }
        ></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    
      <Footer></Footer>
    </div>
  );
}

export default App;

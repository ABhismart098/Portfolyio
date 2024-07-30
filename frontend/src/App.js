import {BrowserRouter as Router, Route,Routes,}from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Hader/Header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/contact";
import Login from "./components/Account/Login";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getUser, loaduser } from "./action/user";
import AdminPannel from "./components/Admin/AdminPannel";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.login)
  const {loading} = useSelector((state) => state.user)

useEffect(() =>{
  dispatch (getUser());
  dispatch (loaduser());

},[dispatch])

  return <Router>
    {loading? <div>loading</div>:(
      <>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={isAuthenticated ?<AdminPannel/>:<Login/>} />
      
</Routes>
<ToastContainer />
     <Footer />
      </>
    )}
    
  </Router>
    
      

}

export default App;

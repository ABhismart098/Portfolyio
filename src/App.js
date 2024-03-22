import {BrowserRouter as Router, Route,Routes,}from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Hader/Header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/contact";
import Login from "./components/Account/Login";


function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login/>} />
</Routes>
     <Footer />
    
  </Router>
    
      

}

export default App;

import {BrowserRouter as Router, Route,Routes,}from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Hader/Header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";


function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
</Routes>
     <Footer />
    
  </Router>
    
      

}

export default App;

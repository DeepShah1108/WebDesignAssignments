
import './App.css';
import Login from "./App/Login/login"
import Homepage from './App/Homepage/homepage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import { useState } from 'react';
import Aboutus from './App/Aboutus/about'
import Contact from './App/Contact/contact'
import Jobs from './App/Jobs/jobs'






function App() {

    // const [ user ] = useState({})




  return (
    <div className='App'>
      <Router>
        
        <Routes>
          <Route exact path='/' element ={<Login />}></Route>
          <Route path='/homepage' element ={<Homepage />}></Route>
          <Route path='/about' element = {<Aboutus />}></Route>
          <Route path='/contact' element = {<Contact />}></Route>
          <Route path='/jobs' element = {<Jobs />}></Route>
        </Routes>
      </Router>
    </div>
    // <Router>
    //     <Routes>
    //       <Route path = "/" element = {<Login/>}></Route>
    //       <Route path="/"><Login /></Route>
    //       <Route path="/App/Login"><Login /></Route>
    //       <Route path="/App/Homepage"><Homepage /></Route>
    //     </Routes>
    // </Router>
    // <div className='App'>
    //   <Login />
    //  
    // </div>
    


  );
}

export default App;

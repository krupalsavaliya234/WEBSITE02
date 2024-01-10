// import logo from './logo.svg';
import './App.css';
import AddItem from './component/AddItem/AddItem';
import SignUp from './component/SignUp';
import Home from './component/home-page/Home';
import LogOut from './component/home-page/logout/LogOut';
import SignIn from './component/signin';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AddItem" element={<AddItem />}/>

        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signIN" element={<SignIn/>} />
        <Route path='/logout' element={<LogOut/>}/>
        
      </Routes>
    </BrowserRouter>
   
      
     
    </div>
  );
}

export default App;

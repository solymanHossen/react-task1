import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';

import NavBar from './components/NavBar.js/NavBar';
import RandomUser from './components/RandomUser/RandomUser';
import SideBar from './components/SideBar.js/SideBar';
import Home from './Home/Home';
import Counter from './Pages/Counter';
import Form from './Pages/Form';
import List from './Pages/List';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
     
      <NavBar/>
      <SideBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>

        {/* protected route */}
        <Route element={<ProtectedRoute/>}>
        <Route path='/form' element={<Form/>}/>
      </Route>
       {/* <Route path='/form' element={<Form/>}/> */}


       <Route path='/counter' element={<Counter/>}/>
       <Route path='/list' element={<List/>}/>    
      </Routes>
      {/* <RandomUser/> */}
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
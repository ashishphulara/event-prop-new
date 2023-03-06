import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Toaster from 'react-hot-toast';
import UserRegister from "./Components/User/UserRegister";
import Login from "./Components/User/UserLogin";
import VendorLogin from "./Components/Vendor/VendorLogin";
import VendorRegister from "./Components/Vendor/VendorRegister";
import DisplayProposals from './Components/Proposals/DisplayProposals';
import CreateProposals from './Components/Proposals/CreateProposals';
import Details from './Components/Proposals/Details';
import Events from './Components/Proposals/Events';
import Eventheader from './Components/Proposals/Eventheader';
import Selected from './Components/Proposals/Selected';
import { useState } from 'react';
import UserContext from './Components/UserContext';

function App() {
  const [username, setUsername] =  useState("")
  return (
    <div>
     <UserContext.Provider value={{username,setUsername}}>
      <Router>

        <Routes >
       
          <Route path='/loginuser' element={<Login />} />
          <Route path='/registeruser' element={<UserRegister />} />
          <Route path='/loginvendor' element={<VendorLogin />} />
          <Route path='/registervendor' element={<VendorRegister />} />
          <Route path='/' element={<DisplayProposals />} />
          <Route path='/createproposals' element={<CreateProposals />} />
          <Route path='/details' element={<Details />} />
          <Route path='/events' element={<Events />} />
          <Route path='/eventheader' element={<Eventheader />} />
          <Route path='/selected' element={<Selected />} />
        </Routes>
      </Router>
      </UserContext.Provider>
   
    </div>


  );
}

export default App;
 // <Toaster

      //   position="top-center"
      //   toastOptions={{
      //     success: {
      //       theme: {
      //         primary: (36, 185, 135)
      //       }
      //     }
      //   }}
      // >
      // </Toaster>
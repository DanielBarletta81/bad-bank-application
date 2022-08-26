import React, {createContext} from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import NavBar from "./components/navbar";
import CreateAccount from './components/createaccount';
import Deposit from './deposit';
import Withdraw from './components/withdraw';
import AllData from './alldata';

export const UserContext = createContext(null);

function App() {
  
  return (<>
    <NavBar />

      <UserContext.Provider value={{
      users: ['Daniel']
    }}><Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/createaccount/" element={<CreateAccount/>} />
    <Route path="/deposit/" element={<Deposit/> }/>
    <Route path="/withdraw/" element={<Withdraw/> }/>
        <Route path="/alldata/" element={<AllData />} />
         </Routes>
     </UserContext.Provider>
     
    
      </>
  
  
  );
}
export default App;
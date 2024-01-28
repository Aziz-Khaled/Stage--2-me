import React from 'react';
import {Route , Routes} from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import AllComponents from './Components/newHome/AllComponents';
import Login from './Components/Admin/Login';


function App() {
  return (
    <div className="App">
<Routes>
<Route path ="/" element = {<AllComponents/>}/>
<Route path ="/login" element = {<Login/>}/>
<Route path ="/adminPanel" element = {<Admin/>}/>
</Routes>
    </div>
  );
}

export default App;


import './App.css';
import React from "react";
import Fullname from './component/Profil/fullname';
import Adresse from './component/Profil/adress';
import Profil from './component/Profil/photo';

function App() {
return (
  <>
  <div className='contain'>
  <Profil/>
  <Fullname/>
  <Adresse/>
  </div>  
  </>
)

}

export default App;

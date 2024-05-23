import React from 'react'
import {Routes,Route} from 'react-router-dom'


import Home from './Componates/Home';
import './Componates/Style/Home.css';

import Termsand from './Componates/Termsand';
import './Componates/Style/Termsand.css';

import Ootyimg from './Componates/Ootyimg';
import './Componates/Style/Ootyimg.css';

import Cardanim from './Componates/Cardanim';
import './Componates/Style/Cardanim.css';

import Imganim from './Componates/Imganim';
import './Componates/Style/Imganim.css';

import './Componates/SignUp'
import Login from './Componates/Login';


export default function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Termsand' element={<Termsand/>}/>
        <Route path='/Ooty' element={<Ootyimg/>}/>
        <Route path='/fourFevPlace' element={<Cardanim/>}/>
        <Route path='/Momentpic' element={<Imganim/>}/>
        <Route path='/Login' element={<Login/>}/>
     </Routes>
    </div>
  )
}


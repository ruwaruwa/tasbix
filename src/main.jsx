import React from 'react'
import {createRoot} from 'react-dom/client'
import './Index.css'
import Index from './components/Index';
const root=document.getElementById('root')
createRoot(root).render(
  <div>
    <div>
     <Index/>
    </div>
  </div>
);
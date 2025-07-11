import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Index } from './Index.jsx';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import { SignIn5_4OGu4sTs,SignUp14_39Oiq1mg } from './Index.jsx';
import Home from './pages/Home.jsx';

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index/>}>
      <Route path='' element ={<Home/>} />
      <Route path="login" element={<SignIn5_4OGu4sTs />} />
      <Route path="signUp" element={<SignUp14_39Oiq1mg/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

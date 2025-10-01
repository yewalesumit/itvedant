import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './Component/Home';
import About from './Component/About';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Contatctus from './Component/Contatctus';
import Login from './Component/Login';
// import Reg from './Component/Reg';
import Nav from './Component/Nav'
import Productd from './Component/Productd';
import About1 from './Component/About1';
// import Error from './Component/Error';
// import App from './App';
// import App1 from './App1';

const Home = React.lazy(()=>import('./Component/Home'));

const Reg = React.lazy(()=>import('./Component/Reg'));


const router = createBrowserRouter([
  { index:'/',
    element:<Nav />,
    children:[
      {index:true,element:<React.Suspense><Home /></React.Suspense>},
      {path:'/home',element:<Home />},
      {path:'/about',element:<About />},
      {path:'/contact',element:<Contatctus />},
      {path:'/login',element:<Login />},
      {path:'/reg',element:<Reg />},
      {path:'/nav',element:<Nav />},
      {path:'/about1',element:<About1 />},
      {path:'/product/:pid',element:<Productd />},
      {path:"*",element:<Home />}
    ],
    // errorElement:<Error/>
 },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

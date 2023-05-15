import './App.css';
import Formatter from './components/Formatter';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home';
import Spacex from './Pages/Spacex';
import Theboringcompany from './Pages/Theboringcompany';
import Contact from './Pages/Contact';
import Openai from './Pages/Openai';
import Tesla from './Pages/Tesla';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Formatter />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/spacex",
        element: <Spacex />
      },
      {
        path: "/tesla",
        element: <Tesla />
      },
      {
        path: "/openai",
        element: <Openai />
      },
      
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/theboringcompany",
        element: <Theboringcompany />
      },
    
    ]
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
   
  );
}

export default App;




import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Detailes from './components/Detailes';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader: async()=>{
          return fetch("https://dummyjson.com/products")
        }
      },
      {
        path:"/detailes/:id",
        element:<Detailes></Detailes>,
        loader: async ({params}) => {
          return fetch(`https://dummyjson.com/products/${params.id}`)
        }
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

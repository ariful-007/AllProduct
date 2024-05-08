
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './pages/Home';
import Services from './pages/Services';
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

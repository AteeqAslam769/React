import {createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Home,About,Contact,Github} from './Component'
import { GithubDataLoader } from './Component/Github.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        element:<Home/>,
        path:''
      },
      {
        element:<About/>,
        path:'/about'
      },
      {
        element:<Contact/>,
        path:'/contact'
      },
      {
        loader:GithubDataLoader,
        element:<Github/>,
        path:'/github'
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

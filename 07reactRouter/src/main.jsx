import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       },
//       {
//         path:"User/:userId",
//         element:<User/>
//       },
//       {
//         path:"Github",
//         element:<Github/>,
//       }
//     ]
//   }
// ])

    // OR

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="User/:userId" element={<User/>} />
      <Route path='Github'element={<Github/>} loader={githubInfoLoader} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

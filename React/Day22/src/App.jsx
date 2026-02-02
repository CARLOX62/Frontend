import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import ParamComp from './components/ParamComp.jsx'
import Profile from './components/Profile.jsx'
import Marks from './components/Marks.jsx'
import Fees from './components/Fees.jsx'
import NotFound from './components/NotFound.jsx'
import React from 'react'

const router = createBrowserRouter([
  { path: '/', element: <div><Navbar/><Home/></div>}, 
  { path: '/about', element: <div><Navbar/><About/></div>},
  { path: '/dashboard', element: <div><Navbar/><Dashboard/></div>,
      children: [
          { path: 'profile', element: <Profile /> },
          { path: 'marks', element: <Marks /> },
          { path: 'fees', element: <Fees /> }
        ]
  },
  { path: "/student/:id", element: <div><Navbar/><ParamComp/></div>},
  {path: '*', element: <div><NotFound/></div>}
])


function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )

}

export default App

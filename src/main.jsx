import { data } from 'autoprefixer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Statistics from './components/Statistics/Statistics'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch ('data.json')
      },
      {
        path:"jobDetails/:jobId",
        element:<JobDetails></JobDetails>,

      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/appliedjob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router ={router}/>
  </React.StrictMode>,
)

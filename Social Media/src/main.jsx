import React from 'react'
import ReactDOM from 'react-dom/client'
import  {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Createpost from './component/createPost.jsx'

const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path:"create-post",element:<Createpost />},
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router}/>
    </React.StrictMode>
    )

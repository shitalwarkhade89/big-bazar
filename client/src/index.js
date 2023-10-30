import ReactDom from 'react-dom/client';
import './index.css'
import{createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Login from './views/Login/Login';
import Singup from './views/Singup/Singup';
const root = ReactDom.createRoot(document.getElementById('root'));


const router= createBrowserRouter([
    {
        path:'/',
        element:<h1>Home</h1>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/singup',
        element:<Singup/>
    },

])

root.render(<RouterProvider router={router}/>);
import ReactDom from 'react-dom/client';
import './index.css'
import{createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Login from './views/Login/Login';
import Singup from './views/Singup/Singup';
import Home from './views/Home/Home';
import MyOrders from './views/MyOrders/MyOrders';
const root = ReactDom.createRoot(document.getElementById('root'));


const router= createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Singup/>
    },
    {
        path:'/orders',
        element:<MyOrders/>
    },

])

root.render(<RouterProvider router={router}/>);
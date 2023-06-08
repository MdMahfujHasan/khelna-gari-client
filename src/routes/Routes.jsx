import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import Category1Card from '../pages/Home/Category/Category1Card';
import Category2Card from "../pages/Home/Category/Category2Card";
import Category3Card from "../pages/Home/Category/Category3Card";
import PrivateRoute from "../providers/PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import ToyDetails from "../pages/AllToys/ToyDetails";
import NotFound from "../shared/NotFound";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "remoteControlCars/:id",
                element: <PrivateRoute><Category1Card></Category1Card></PrivateRoute>,
                loader: ({ params }) => fetch(`https://khelna-gari-server.vercel.app/category1/${params.id}`)
            },
            {
                path: "constructionAndBuildingCars/:id",
                element: <PrivateRoute><Category2Card></Category2Card></PrivateRoute>,
                loader: ({ params }) => fetch(`https://khelna-gari-server.vercel.app/category2/${params.id}`)
            },
            {
                path: "transformingCars/:id",
                element: <PrivateRoute><Category3Card></Category3Card></PrivateRoute>,
                loader: ({ params }) => fetch(`https://khelna-gari-server.vercel.app/category3/${params.id}`)
            },
            {
                path: "add-toy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://khelna-gari-server.vercel.app/allToys')
            },
            {
                path: "all-toys/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://khelna-gari-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: "my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "my-toys/update/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://khelna-gari-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },

        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;
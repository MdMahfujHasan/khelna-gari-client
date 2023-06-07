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
                loader: ({ params }) => fetch(`http://localhost:5000/category1/${params.id}`)
            },
            {
                path: "constructionAndBuildingCars/:id",
                element: <PrivateRoute><Category2Card></Category2Card></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category2/${params.id}`)
            },
            {
                path: "transformingCars/:id",
                element: <PrivateRoute><Category3Card></Category3Card></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category3/${params.id}`)
            },
            {
                path: "add-toy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/allToys')
            }
        ]
    }
]);

export default router;
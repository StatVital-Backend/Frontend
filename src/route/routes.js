import Layout from "../layout/Layout";
import Home from '../component/Home/Home'

export const ROUTES = [
    {
        path:'',
        element: <Layout />,
        children:[
            {
                path:'',
                element: <Home />,
            },
        ]
    }
]
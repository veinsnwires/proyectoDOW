import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './views/Home';
import ArriendosActivos, {
    loader as loaderActivos,
} from './views/ArriendosActivos';
import ArriendosFinalizados, {
    loader as loaderFinalizados,
} from './views/ArriendosFinalizados';
import ArriendosPorCategorias, {
    loader as loaderCategorias,
} from './views/ArriendosPorCategorias';
import CrearArriendo, {
    action as actionCrearArriendo,
} from './views/CrearArriendo';
import Login, { action as loginAction } from './views/Login';
import Signup, { action as signupAction } from './views/Signup';
import Loader from './components/Loader';
import { PrivateRoute } from './components/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login />,
        action: loginAction,
    },
    {
        path: 'signup',
        element: <Signup />,
        action: signupAction,
    },
    {
        //URL RAIZ DEL SITIO
        path: '/',
        element: <Layout />,
        HydrateFallback: Loader,
        //VISTAS DEL LAYOUT
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'arriendosporcategoria',
                        element: <ArriendosPorCategorias />,
                        loader: loaderCategorias,
                    },
                    {
                        path: 'activos',
                        element: <ArriendosActivos />,
                        loader: loaderActivos,
                    },
                    {
                        path: 'finalizados',
                        element: <ArriendosFinalizados />,
                        loader: loaderFinalizados,
                    },
                    {
                        path: 'nuevoarriendo',
                        element: <CrearArriendo />,
                        action: actionCrearArriendo,
                    },
                ],
            },
        ],
    },
]);

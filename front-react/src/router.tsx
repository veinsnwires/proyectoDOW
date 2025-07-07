import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './views/Home';
import ArriendosActivos, {
    loader as loaderActivos,
} from './views/ArriendosActivos';
import ArriendosFinalizados, {
    loader as loaderFinalizados,
} from './views/ArriendosFinalizados';
import Login from './views/Login';
import ArriendosPorCategorias from './views/ArriendosPorCategorias';
import CrearArriendo, {
    action as actionCrearArriendo,
} from './views/CrearArriendo';
import Loader from './components/Loader';

export const router = createBrowserRouter([
    {
        //URL RAIZ DEL SITIO
        path: '/',
        element: <Layout />,
        HydrateFallback: Loader,
        //Las vistas que tendrá este layout
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'arriendosporcategoria',
                element: <ArriendosPorCategorias />,
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
]);

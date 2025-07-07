import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './views/Home';
import ArriendosActivos, {
    loader as loaderActivos,
} from './views/ArriendosActivos';
import Login from './views/Login';
import ArriendosPorCategorias from './views/ArriendosPorCategorias';
import CrearArriendo from './views/CrearArriendo';
import ArriendosFinalizados from './views/ArriendosFinalizados';

export const router = createBrowserRouter([
    {
        //URL RAIZ DEL SITIO
        path: '/',
        element: <Layout />,
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
            },
            {
                path: 'nuevoarriendo',
                element: <CrearArriendo />,
            },
        ],
    },
]);

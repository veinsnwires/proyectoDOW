import loaderGif from '../assets/loader.gif';
import '../css/Loader.component.css';

export default function Loader() {
    return (
        <div className="container">
            <img className="spinner" src={loaderGif} alt="Cargando..." />
            <p className="small">Cargando datos...</p>
        </div>
    );
}

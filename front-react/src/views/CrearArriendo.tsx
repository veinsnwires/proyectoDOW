import {
    Form,
    Link,
    redirect,
    type ActionFunctionArgs,
} from 'react-router-dom';
import { arriendoCrear } from '../services/ArriendoService';
import '../css/Ingreso.css';

export async function action({ request }: ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData());
    console.log('FORM DATA:', formData);
    const resultado = await arriendoCrear(formData);
    if (!resultado?.success) {
        return resultado;
    }
    return redirect('/activos');
}

export default function CrearArriendo() {
    return (
        <div className="ingreso-background container-fluid">
            <Link to="/arriendosporcategoria" className="btn btn-bg-m mt-4">
                Volver a arriendos
            </Link>
            <h1
                style={{
                    color: 'white',
                    fontSize: '3rem',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '700',
                    textAlign: 'right',
                    paddingTop: '40px',
                    marginBottom: '1rem',
                    textShadow: '2px 2px 2px rgba(0,0,0,0.8)',
                }}
            >
                Ingreso de nuevo arriendo
            </h1>
            <div className="col-8 text-begin"></div>
            <div className="row mt-4">
                <div className="col-6 offset-6">
                    <div className="card">
                        <div className="card-body card-background">
                            <Form method="POST">
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="patenteVehiculo"
                                    >
                                        Patente vehículo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="patenteVehiculo"
                                        name="patenteVehiculo"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="nombreCliente"
                                    >
                                        Nombre cliente
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreCliente"
                                        name="nombreCliente"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="rutCliente"
                                    >
                                        Rut del cliente
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutCliente"
                                        name="rutCliente"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="tipoVehiculo"
                                    >
                                        Categoría
                                    </label>
                                    <select
                                        className="form-select"
                                        id="tipoVehiculo"
                                        name="tipoVehiculo"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Ingresar tipo de vehículo
                                        </option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Camioneta">
                                            Camioneta
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-3 text-end">
                                    <button
                                        type="reset"
                                        className="btn btn-bg-s me-1"
                                    >
                                        Restablecer
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-bg-s"
                                    >
                                        Generar Arriendo
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

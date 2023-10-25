import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineEye, AiFillDelete} from 'react-icons/ai'
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import '../css/style.css'
import '../css/landing.css'
import '../fonts/cryptofont.css'
import '../fonts/feather.css'
import '../fonts/fontawesome.css'
import '../fonts//material.css'

function Form() {
    return (
        <section className="pc-container">
            <div className="pcoded-content">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Registro de proveedores</h5>
                            </div>
                            <div className="card-body">
                                {/* <script>
                // Example starter JavaScript for disabling form submissions if there are invalid fields
                (function() {
                    'use strict';
                    window.addEventListener('load', function() {
                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        var forms = document.getElementsByclassName('needs-validation');
                        // Loop over them and prevent submission
                        var validation = Array.prototype.filter.call(forms, function(form) {
                            form.addEventListener('submit', function(event) {
                                if (form.checkValidity() === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                                form.classList.add('was-validated');
                            }, false);
                        });
                    }, false);
                })();
            </script> */}
                                <form className="was-validated">
                                    {/*     <div className="mb-3">
                                <label for="validationTextarea" className="form-label">Textarea</label>
                                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div> */}

                                    <div className="form-group col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="tipoDocumento" className="form-label">Tipo de documento</label>
                                            <select
                                                className="form-select"
                                                id="tipoDocumento"
                                                name="tipoDocumento"
                                                required
                                            >
                                                <option value="" disabled>Selecciona un tipo de documento</option>
                                                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                                                <option value="cedulaExtranjeria">Cédula de extranjería</option>
                                                <option value="pasaporte">Pasaporte</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="documento" className="form-label">Documento</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="documento"
                                            name="documento"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6 ">
                                        <label htmlFor="empresa" className="form-label">Empresa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="empresa"
                                            name="empresa"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ciudad"
                                            name="ciudad"
                                            required
                                        />
                                    </div>


                                    <div className="mb-3">
                                        <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12">

                        <div className="card">
                            <div className="card-header">
                                <h5>Visualización del proveedor</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-primary"><i className="mr-2" data-feather="thumbs-up"></i>Registrar</button>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Buscador" />
                                        </div>
                                    </div>
                                </div>


                                <div className="card-body table-border-style">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Tipo</th>
                                                    <th>Documento</th>
                                                    <th>Nombre</th>
                                                    <th>Empresa</th>
                                                    <th>Telefono</th>
                                                    <th>Ciudad</th>
                                                    <th>Email</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>CC</td>
                                                    <td>1023522319</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>3012649543</td>
                                                    <td>Medellin</td>
                                                    <td>estefania@gmaail.com</td>
                                                    <td><button type="button" className="btn btn-icon btn-primary"><i data-feather="thumbs-up"><BiEdit/></i></button>
                                                        <button type="button" className="btn btn-icon btn-secondary"><i data-feather="camera"><AiOutlineEye/></i></button>
                                                        <button type="button" className="btn btn-icon btn-success"><i data-feather="check-circle"><AiFillDelete/></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Form
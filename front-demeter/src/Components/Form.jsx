import React, { useState, useEffect } from 'react';
import {BiEdit} from 'react-icons/bi'
import {AiOutlineEye, AiFillDelete} from 'react-icons/ai'
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useSupplier } from '../Context/Supplier.context';
import '../css/style.css'
import '../css/landing.css'
import '../fonts/cryptofont.css'
import '../fonts/feather.css'
import '../fonts/fontawesome.css'
import '../fonts//material.css'



function Form() {
    const { supplier, getSupplier, deleteSupplier } = useSupplier();

    useEffect(() => {
        getSupplier().then(console.log(supplier));
      }, []);

  return (
   
    <section class="pc-container">
    <div class="pcoded-content">

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Registro de proveedores</h5>
                    </div>
                    <div class="card-body">
                        {/* <script>
                // Example starter JavaScript for disabling form submissions if there are invalid fields
                (function() {
                    'use strict';
                    window.addEventListener('load', function() {
                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        var forms = document.getElementsByClassName('needs-validation');
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
                        <form class="was-validated">
                        {/*     <div class="mb-3">
                                <label for="validationTextarea" class="form-label">Textarea</label>
                                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div> */}

                        <div class="form-group col-md-6">
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

                    <div class="form-group col-md-6">
                    <label htmlFor="documento" className="form-label">Documento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="documento"
                        name="documento"
                        required
                    />
                </div>

                <div class="form-group col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        required
                    />
                </div>

                <div class="form-group col-md-6">
                    <label htmlFor="empresa" className="form-label">Empresa</label>
                    <input
                        type="text"
                        className="form-control"
                        id="empresa"
                        name="empresa"
                        required
                    />
                </div>

                <div class="form-group col-md-6">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        required
                    />
                </div>

                <div class="form-group col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div class="form-group col-md-6">
                    <label htmlFor="ciudad" className="form-label">Ciudad</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ciudad"
                        name="ciudad"
                        required
                    />
                </div>
                    
                         
                            <div class="mb-3">
                                <button class="btn btn-primary" type="submit" disabled>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        

            <div class="col-sm-12">

                <div class="card">
                    <div class="card-header">
                        <h5>Visualización del proveedor</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <button type="button" class="btn btn-primary"><i class="mr-2" data-feather="thumbs-up"></i>Registrar</button>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Buscador" />
                                </div>
                            </div>
                        </div>


                        <div class="card-body table-border-style">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tipo de documento</th>
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
                                    {supplier.map((supplierItem) => (
                                    <tr key={supplierItem.ID_Supplier}>
                                        <td>{supplierItem.Type_Document}</td>
                                        <td>{supplierItem.Document}</td>
                                        <td>{supplierItem.Name_Supplier}</td>
                                        <td>{supplierItem.Name_Business}</td>
                                        <td>{supplierItem.Phone}</td>
                                        <td>{supplierItem.City}</td>
                                        <td>{supplierItem.Email}</td>
                                        
                                        
                                            <td><button type="button" class="btn  btn-icon btn-primary"><i data-feather="thumbs-up"><BiEdit/></i></button>
                                                <button type="button" class="btn  btn-icon btn-secondary"><i data-feather="camera"><AiOutlineEye/></i></button>
                                                <button type="button" class="btn  btn-icon btn-success"><i data-feather="check-circle"><AiFillDelete/></i></button>
                                            </td>
                                        </tr>    
                                       ))}               
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
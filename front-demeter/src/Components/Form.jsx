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
import ModalSupplier from '../Components/ModalSupplier.jsx';



function Form() {
    const { supplier, getSupplier, deleteSupplier } = useSupplier();

    useEffect(() => {
        getSupplier();
      }, []);

  return (
   
    <section class="pc-container">
    <div class="pcoded-content">

        <div class="row w-100">
            
        
            
            <div class=" w-100 col-sm-12">

                <div class="card">
                    <div class="card-header">
                        <h5>Visualización del proveedor</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                {/* <button type="button" class="btn btn-primary"><i class="mr-2" data-feather="thumbs-up"></i>Registrar</button> */}
                                <ModalSupplier />
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
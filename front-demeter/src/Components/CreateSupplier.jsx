import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CreateSupplier() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <button type="button" class="btn btn-primary" onClick={handleOpen}><i class="mr-2" data-feather="thumbs-up"></i>Registrar</button> 
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <div>
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

                        <div className="control">
                        <div class="form-group col-md-6">
                        <div className="mb-3">
                            <label htmlFor="tipoDocumento" className="form-label mt-3">Tipo de documento</label>
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
                            <div class="invalid-feedback">Ingrese el tipo de documento</div>
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

                        </div>
                       
             

                <div className='control'>
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
                </div>
                

                

                <div className="control">
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
                </div>
                <div className="city">
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
                </div>                              
                         <div className="buttonconfirm">
                         <div class="mb-3">
                                <button class="btn btn-primary mr-5" type="submit" disabled>Confirmar</button>
                                <button class="btn btn-primary" onClick={handleClose} type="submit" >Cancelar</button>
                            </div>
                         </div>
                         
                        </form>
                    </div>
                </div>
            </div>
          </div>
   
        </Box>
      </Modal>
    </React.Fragment>
  );
}
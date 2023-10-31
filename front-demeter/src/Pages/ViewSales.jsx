import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSaleContext } from '../context/SaleContext';
import ReactPaginate from 'react-paginate';
import '../fonts/feather.css'; 
import '../fonts/fontawesome.css'; 
import '../fonts/material.css'; 
import '../css/style.css'; 
import { AiOutlineEye, AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import users from '../img/users.png'
import PaymentMethodModal from '../components/PayModal.jsx'
import ReadSale from './ReadSale';

function ViewSales() {
  const {  fetchSales, Sales, paySale, getOne, Sale } = useSaleContext();
  const [pageNumber, setPageNumber] = useState(0);
  const [idSale, setID] = useState();
  const salesPerPage = 10;
  const pagesVisited = pageNumber * salesPerPage;
  const displaySales = Sales.slice(pagesVisited, pagesVisited + salesPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(Sales.length / salesPerPage);

  useEffect(() => {
    fetchSales();
  }, []);
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

    const [helloModalOpen, setHelloModalOpen] = useState(false);

    const openHelloModal = () => {
      setHelloModalOpen(true);
    };
  
    const closeHelloModal = () => {
      setHelloModalOpen(false);
    };
  

  return (
    <div>
      <header className="pc-header">
        <div className="header-wrapper">
          <div className="mr-auto pc-mob-drp">
            <ul className="list-unstyled">
              <li className="dropdown pc-h-item">
                <h3>Gestión de Ventas</h3>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <ul className="list-unstyled">
              <li className="dropdown pc-h-item">
                <a
                  className="pc-head-link dropdown-toggle arrow-none mr-0"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img src={users} alt="user-image" className="user-avtar" />
                  <span>
                    <span className="user-name">Alvaro Perez N</span>
                    <span className="user-desc">Administrator</span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right pc-h-dropdown">
                  <a href="auth-signin.html" className="dropdown-item">
                    <i className="material-icons-two-tone">chrome_reader_mode</i>
                    <span>Editar perfil</span>
                  </a>
                  <a href="auth-signin.html" className="dropdown-item">
                    <i className="material-icons-two-tone">lock</i>
                    <span>Cambio contraseña</span>
                  </a>
                  <br />
                  <a href="auth-signin.html" className="dropdown-item">
                    <i className="material-icons-two-tone">exit_to_app</i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="pc-container">
        <div className="pcoded-content">
          <div className="row">
            <div className="col-md-12 w-[150vh]">
              <div className="card">
                <div className="card-header">
                  <h5>Visualización de Ventas</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <Link to="/sales">
                        <button type="button" className="btn bg-red-500">
                          Registrar Ventas
                        </button>
                      </Link>
                    </div>
                   
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="search"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Buscador"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body table-border-style">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Estado</th>
                            <th>Total</th>
                            <th>SubTotal</th>
                            <th>Mesero</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {displaySales.map((sale, index) => (
                            <tr key={index}>
                              <td>{sale.ID_Sale}</td>
                              <td>{sale.StatePay ? 'Pendiente' : 'Pagado'}</td>
                              <td>{sale.Total}</td>
                              <td>{sale.Total}</td>
                              <td>{sale.User_ID ? sale.User_ID : 'Venta Rapida'}</td>
                              <td>
                                <button type="button" className="btn btn-icon btn-primary" >
                                  <i><BiEdit></BiEdit></i>
                                </button>
                                <button type="button" className="btn btn-icon btn-secondary" onClick={()=>{getOne(sale.ID_Sale).then(openHelloModal()) }}>
                                  <i><AiOutlineEye></AiOutlineEye></i>
                                </button>
                                <button type="button" className="btn btn-icon btn-success" onClick={() =>{openModal(), setID(sale.ID_Sale)}}>
                                  <i><AiFillDelete></AiFillDelete></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="ml-[50vh]">
                    <ReactPaginate
                      previousLabel={'<'}
                      nextLabel={'>'}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination space-x-2 mt-4'}
                      previousLinkClassName={'text-gray-600 rounded-full p-2'}
                      nextLinkClassName={'text-gray-600 rounded-full p-2'}
                      disabledClassName={'text-gray-300 cursor-not-allowed'}
                      activeClassName={'bg-red-500 text-white rounded-full pl-2 pr-2'}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {helloModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-96 rounded-lg shadow-lg">
              <ReadSale></ReadSale>
            <div className="modal-actions flex justify-center pb-4">
              <button
                type="button"
                className="btn bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={closeHelloModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      <PaymentMethodModal isOpen={isModalOpen} onRequestClose={() =>{closeModal(), fetchSales()}} id={idSale} />
    </div>
  );
}
export default ViewSales;
import React, { useState } from 'react';
import logo from '../img/logo.png'
import '../css/style.css'
import '../css/landing.css'
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {

    const [submenuComprasVisible, setSubmenuComprasVisible] = useState(false);
    const [submenuVentasVisible, setSubmenuVentasVisible] = useState(false);

    const navigate = useNavigate();

    const toggleSubmenuCompras = () => {
        setSubmenuComprasVisible(prevStateC => !prevStateC);
    };

    const toggleSubmenuVentas = () => {
        setSubmenuVentasVisible(prevStateV => !prevStateV);
    }

    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <button
                        onClick={() => {
                            navigate('/');
                        }}
                        className="b-brand"
                    >
                        <img src={logo} alt="Demeter SOFT" className="logo logo-lg" width="130" height="60" />
                    </button>
                </div>
                <div className="navbar-content">
                    <ul className="pc-navbar">
                        <li className="pc-item pc-caption">
                            <label>MENÚ</label>
                        </li>
                        <li className="pc-item">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                className="pc-link"
                            >
                                <DashboardIcon />
                                <span className="pc-mtext">
                                    Dashboard
                                </span>
                            </button>
                        </li>
                        <li className="pc-item pc-caption">
                            <span>Gestión de configuración</span>
                        </li>
                        <li className="pc-item pc-hasmenu">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                className="pc-link"
                            >
                                <SecurityIcon />
                                <span className="pc-mtext">
                                    Roles y permisos
                                </span>
                            </button>
                        </li>
                        <li className="pc-item pc-caption">
                            <span>Gestión de usuarios</span>
                        </li>
                        <li className="pc-item">
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                className="pc-link"
                            >
                                <PeopleIcon />
                                <span className="pc-mtext">
                                    Empleados
                                </span>
                            </button>
                        </li>
                        <li className="pc-item pc-caption">
                            <span>Gestión de compras</span>
                        </li>
                        <li className="pc-item pc-hasmenu">
                            <button
                                onClick={toggleSubmenuCompras}
                                className="pc-link"
                            >
                                <i className="material-icons-two-tone"><StoreIcon /></i>
                                <span className="pc-mtext">
                                    Gestión de compras
                                </span>
                                <span className="pc-arrow"><ExpandMoreIcon /></span>
                            </button>
                            {submenuComprasVisible && (
                                <ul className="pc-submenu">
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Categria insumos</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Insumos</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Proveedores</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Compras</button></li>
                                </ul>
                            )}
                        </li>
                        <li className="pc-item pc-caption">
                            <span>Gestión de ventas</span>
                        </li>
                        <li className="pc-item pc-hasmenu">
                            <button
                                onClick={toggleSubmenuVentas}
                                className="pc-link"
                            >
                                <ShoppingCartIcon />
                                <span className="pc-mtext">
                                    Gestión de ventas
                                </span>
                                <span className="pc-arrow"><ExpandMoreIcon /></span>
                            </button>
                            {submenuVentasVisible && (
                                <ul className="pc-submenu">
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Categoria producto</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Producto</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Meseros</button></li>
                                    <li className="pc-item"><button onClick={() => { navigate('/') }} className="pc-link">Venta</button></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
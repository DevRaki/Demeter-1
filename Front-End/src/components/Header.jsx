import React, { useState } from 'react';
import '../css/style.css'
import '../css/landing.css'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(prevState => !prevState);
	};

	return (
		<header className="pc-header">
			<div className="header-wrapper">
				<div className="mr-auto pc-mob-drp">
					<ul className="list-unstyled">
						<li className="dropdown pc-h-item">
							<h3><strong>DEMETER</strong></h3>
						</li>
					</ul>
				</div>
				<div className="ml-auto">
					<ul className="list-unstyled">
						<li className="dropdown pc-h-item">
							<button
								className="pc-head-link dropdown-toggle arrow-none mr-0"
								role="button"
								aria-haspopup="false"
								aria-expanded="false"
								onClick={toggleDropdown}
							>
								<span>
									<span className="user-name">Samuel Rios A.</span>
									<span className="user-desc">Administrator</span>
								</span>
							</button>
							{showDropdown && (
								<div className="dropdown-menu dropdown-menu-right pc-h-dropdown">
									<button
										className="dropdown-item"
										onClick={() => {
											navigate('/');
										}}
									>
										<ChromeReaderModeIcon />
										<span>Editar perfil</span>
									</button>
									<br />
									<button
										className="dropdown-item"
										onClick={() => {
											navigate('/');
										}}
									>
										<LockIcon />
										<span>Cambio contraseña</span>
									</button>
									<br />
									<button
										className="dropdown-item"
										onClick={() => {
											navigate('/');
										}}
									>
										<ExitToAppIcon />
										<span>Logout</span>
									</button>
								</div>
							)}
						</li>
					</ul>
				</div>

			</div>
		</header>
	);
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
						width="60"
						height="40"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favoritos">
					<Dropdown.Item href="#/action-1" className="d-flex justify-content-between align-items-center">
						<span>Luke Skywalker</span> <i className="fas fa-trash-alt ml-5" />
					</Dropdown.Item>
					<Dropdown.Item href="#/action-2" className="d-flex justify-content-between align-items-center">
						<span>Arturito</span> <i className="fas fa-trash-alt ml-5" />
					</Dropdown.Item>
					<Dropdown.Item href="#/action-3" className="d-flex justify-content-between align-items-center">
						<span>Mr Bean</span> <i className="fas fa-trash-alt ml-5" />
					</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};

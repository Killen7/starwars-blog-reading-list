import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container d-flex flex-row bg-negro rounded p-3">
			<img src="https://picsum.photos/400/400" alt="..." />
			<div className="d-flex flex-column text-white">
				<h1 className="text-center">{store.personajes[params.theid].name}</h1>
				<p className="text-center parrafo">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book
				</p>
			</div>
		</div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object
};

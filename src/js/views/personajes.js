import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let numerourl = parseInt(params.uid, 10) + 1;

	useEffect(() => {
		actions.getDetallePersonaje(params.uid);
	}, []);

	return (
		<div className="container d-flex flex-row bg-negro rounded p-3">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${numerourl}.jpg`} alt="..." />
			<div className="d-flex flex-column text-white">
				<h1 className="text-center">{store.personajes[params.uid].name}</h1>
				<p className="text-center parrafo">
					color de ojos: {store.detalle != null ? store.detalle.eye_color : ""}
				</p>
			</div>
		</div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object,
	uid: PropTypes.string
};

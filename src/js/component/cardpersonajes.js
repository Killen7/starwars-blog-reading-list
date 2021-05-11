import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardPersonajes = props => {
	return (
		<div className="cardscroll mx-2 mb-3" key={props.index}>
			<div className="card border-0" style={{ width: "18rem" }}>
				<img src="https://picsum.photos/200/400" className="card-img-top" width="400" height="200" alt="..." />
				<div className="card-body bg-negro text-white">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<Link to={"/personajes/" + props.index}>
						<span className="btn btn-light">Leer mas</span>
					</Link>
					<button type="button" className="ml-2 btn btn-dark">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardPersonajes;

CardPersonajes.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};

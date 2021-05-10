import React from "react";

const Card = () => {
	return (
		<div className="cardscroll mx-2 mb-3">
			<div className="card border-0" style={{ width: "18rem" }}>
				<img src="https://picsum.photos/200/400" className="card-img-top" width="400" height="200" alt="..." />
				<div className="card-body bg-negro text-white">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-light">
						Go somewhere
					</a>
					<button type="button" className="ml-2 btn btn-dark">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

import React from "react";
import "../../styles/home.scss";
import CardPersonajes from "../component/cardpersonajes";
import CardPlanetas from "../component/cardplanetas";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1 className="titulos text-white ml-4">Personajes</h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
				{store.personajes.map((item, index) => {
					return (
						<div key={index}>
							<CardPersonajes name={item.name} uid={item.uid} index={index} />
						</div>
					);
				})}
			</div>
			<h1 className="titulos text-white mt-2 ml-4">Planetas</h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<CardPlanetas name={item.name} index={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

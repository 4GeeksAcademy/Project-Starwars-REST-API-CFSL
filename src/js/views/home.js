import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardPeople.jsx";
import { CardPlanets } from "../component/cardPlanets.jsx";
import { CardStarships} from "../component/cardStarships.jsx"

export const Home = () => {

	const {store, actions}=useContext(Context);

	return(
		<div>
			<h1 className="m-3" style={{color:"red"}}>Characters</h1>
			<div className="container-fluid d-flex p-0" style={{overflowX:"scroll"}}>
				{store.people?.map(el => <CardPeople key={el.uid} name={el.name} uid={el.uid} /> )}
			</div>
			<h1 className="m-3" style={{color:"red"}}>Planets</h1>
			<div className="container-fluid d-flex p-0" style={{overflowX:"scroll"}}>
				{store.planets?.map(el => <CardPlanets key={el.uid} name={el.name} uid={el.uid} /> )}
			</div>
			<h1 className="m-3" style={{color:"red"}}>Vehicles</h1>
			<div className="container-fluid d-flex p-0" style={{overflowX:"scroll"}}>
				{store.starships?.map(el => <CardStarships key={el.uid} name={el.name} uid={el.uid} /> )}
			</div>
		</div>
	);
};


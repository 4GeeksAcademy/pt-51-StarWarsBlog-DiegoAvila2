import React, { useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { CharacterCard } from "../component/CharacterCard.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PlanetCard } from "../component/PlanetCard.js";
import { VehiclesCard } from "../component/VehiclesCard.js";

export const Home = () => {
	//const [state, setState] = useState({});
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllDetails();
        actions.getAllPlanets();
		actions.getAllVehicles();
    }, []);
	return (
	
		<div className="container mt-5">
		<div className="row">
			<h1 className="text-danger mb-3 p-3">Personajes</h1>
					<ul className="flex-nowrap d-flex flex-row overflow-scroll list-unstyled gap-1 px-0">
						{store.characters.map(item => (
							<li className="col-4 px-0 w-auto my-2">
								<CharacterCard key={item.uid} id={item.uid} name={item.name} />
								
							</li>
							))}
					</ul>
		</div>
		<h1 className="text-danger mb-3">Planetas</h1> 
			<div className="row d-flex flex-row mb-3 ">
				<div className="col-12">
				<ul className="list-group d-flex flex-row overflow-scroll">
				{store.planets.map(item => (
					<li className="col-4 px-0 w-auto my-2">
						<PlanetCard key={item.uid} id={item.uid}  name={item.name} />
						</li>
						))}
						
				</ul>
				</div>
			</div>
			<h1 className="text-danger mb-3">Vehiculos</h1> 
			<div className="row d-flex flex-row mb-3 ">
				<div className="col-12">
				<ul className="list-group d-flex flex-row overflow-scroll">
				{store.vehicles.map(item => (
					<li  className="col-4 px-0 w-auto my-2">
						<VehiclesCard key={item.uid} id={item.uid}  name={item.name} />
						</li>
						))}
						
				</ul>
				</div>
			</div>
	</div>
	);
}

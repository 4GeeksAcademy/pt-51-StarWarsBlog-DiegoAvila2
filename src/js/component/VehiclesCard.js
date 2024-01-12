import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const VehiclesCard = props => {
    
    const { store, actions } = useContext(Context);
	const params = useParams();
	
    return (

        <div className="card" style={{Width: "100px"}}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="card-body">
                <Link to="/single">
                    <boton tipe="click" onClick="" className="card-link">Detalles</boton>
                </Link>
                <Link to="/">
                    <boton className="card-link">favoritos</boton>
                </Link>
                
            </div>
        </div>
    )
}
VehiclesCard.propTypes = {
	history: PropTypes.object,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	gender: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	onInfo: PropTypes.func
};
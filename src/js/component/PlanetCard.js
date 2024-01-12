import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const PlanetCard = props => {
    
    const { store, actions } = useContext(Context);
	const params = useParams();
	
    return (

        <div className="card h-100 w-75">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="card-body">
                <Link to={`/single/${props.id}`}>
                    <boton tipe="click" onClick="" className="card-link">Detalles</boton>
                </Link>
                <Link to="/">
                    <boton className="card-link">favoritos</boton>
                </Link>
                
            </div>
        </div>
    )
}
PlanetCard.propTypes = {
	history: PropTypes.object,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	gender: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	onInfo: PropTypes.func
};
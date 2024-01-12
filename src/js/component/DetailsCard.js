import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const DetailsCard = props => {
    
    const { store, actions } = useContext(Context);
	const params = useParams();

    return (

        <div className="card mb-3" style={{width : "540px;"}}>
        <div className="row g-0"> 
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}


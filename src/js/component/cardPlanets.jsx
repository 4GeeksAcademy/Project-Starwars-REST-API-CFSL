import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = ({name, uid }) => {

    const {actions}=useContext(Context);

    return(
        <div className="card m-2" style={{minWidth:"15rem"}}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt={name}  />
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <div className="d-flex justify-content-between m-3">
                    <div>
                        <Link to={'/detailsPlanets/'+uid} className="btn btn-outline-primary">
                            Learn more!
                        </Link> 
                    </div>
                <div>
                    <button className="btn btn-outline-danger" onClick={()=> actions.addFavoritos(name)}><i className="fa fa-heart text-danger" /></button>  
                </div>
                </div>
            </div>
        </div>

    )
}
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetailsPlanets = () => {

    //const params= useParams()----> params sea un objeto {id: 15}
    const {uid} = useParams() //desestructurando el objeto, accediendo directamente a su propiedad uid
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPlanetsDetails(uid)
    }, [])



    return(
        <>
            <h2 className="text-center m-3">Details Planets</h2>
            <div className="container">
                <div className="row g-0 mt-3">
                    <div className="col-md-4">
                        <img className="img-fluid"  src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt={store.planetsDetails?.properties.name} />
                    </div>   
                    <div className="col-md-8">
                        <h5 className="card-title">{store.planetsDetails?.properties.name}</h5>
                        <p className="card-text">{store.planetsDetails?.description}</p>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente illum esse sed nemo in praesentium vel ut iusto libero. Ea porro corrupti fugit, distinctio laborum et provident sequi. Placeat, libero. Repellendus dolores fugit, quaerat nisi sequi nobis minus molestias laudantium quidem facilis, sed velit officiis sunt distinctio eum commodi error!</p>
                    </div>
                </div>
                
                <div className="row text-center mt-3 mb-5"> 
                    <div className="col">
                        <h6>Diameter</h6>
                        <p>{store.planetsDetails?.properties.diameter}</p></div>
                    <div className="col">
                        <h6>Rotation Period</h6>
                        <p>{store.planetsDetails?.properties.rotation_period}</p> </div>
                    <div className="col">
                        <h6>Orbital Period</h6>
                        <p>{store.planetsDetails?.properties.orbital_period}</p></div>  
                    <div className="col">
                        <h6>Gravity</h6>
                        <p>{store.planetsDetails?.properties.gravity}</p></div>  
                    <div className="col">
                        <h6>Population</h6>
                        <p>{store.planetsDetails?.properties.population}</p></div>  
                    <div className="col">
                        <h6>Climate</h6>
                        <p>{store.planetsDetails?.properties.climate}</p></div>  
                    <div className="col">
                        <h6>Terrain</h6>
                        <p>{store.planetsDetails?.properties.terrain}</p></div>  
                    <div className="col">
                        <h6>Surface Water</h6>
                        <p>{store.planetsDetails?.properties.surface_water}</p></div>  
                </div>    
            </div>
            
        </>
        
    );
};
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetailsStarships = () => {

    //const params= useParams()----> params sea un objeto {id: 15}
    const {uid} = useParams() //desestructurando el objeto, accediendo directamente a su propiedad uid
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getStarshipsDetails(uid)
    }, [])



    return(
        <>
            <h2 className="text-center m-3">Details Vehicles</h2>
            <div className="container">
                <div className="row g-0 mt-3">
                    <div className="col-md-4">
                        <img className="img-fluid"  src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} alt={store.starshipsDetails?.properties.name} />
                    </div>    
                    <div className="col-md-8">
                        <h6 className="card-title">{store.starshipsDetails?.properties.name}</h6>
                        <p className="card-text">{store.starshipsDetails?.description}</p>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure incidunt, assumenda quibusdam commodi rerum tempora, libero nemo neque aut eveniet, officiis labore tenetur quis quas a accusantium vel autem tempore dignissimos consequuntur pariatur! Voluptate quos maiores, corporis ipsa quis in minima dolorum ex nobis tempore, molestias sequi, alias sit.</p>
                        
                    </div>
                </div>
                <div className="row text-center mt-3 mb-5">
                    <div className="col">
                        <h6>Model</h6>
                        <p>{store.starshipsDetails?.properties.model}</p></div>
                    <div className="col">
                        <h6>Starship Class</h6>
                        <p>{store.starshipsDetails?.properties.starship_class}</p></div>
                    <div className="col">
                        <h6>Manufacturer</h6>
                        <p>{store.starshipsDetails?.properties.manufacturer}</p></div>
                    <div className="col">
                        <h6>Cost in credits</h6>
                        <p>{store.starshipsDetails?.properties.cost_in_credits}</p></div>
                    <div className="col">
                        <h6>Length</h6>
                        <p>{store.starshipsDetails?.properties.length}</p></div>
                    <div className="col">
                        <h6>Crew</h6>
                        <p>{store.starshipsDetails?.properties.crew}</p></div>
                    <div className="col">
                        <h6>Passengers</h6>
                        <p>{store.starshipsDetails?.properties.passengers}</p></div>
                    <div className="col">
                        <h6>max Atmosphering Speed</h6>
                        <p>{store.starshipsDetails?.properties.max_atmosphering_speed}</p></div>
                    
                </div>
            </div>
            
        </>
        
    );
};
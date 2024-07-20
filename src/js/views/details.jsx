import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {

    //const params= useParams()----> params sea un objeto {id: 15}
    const {uid} = useParams() //desestructurando el objeto, accediendo directamente a su propiedad uid
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getPeopleDetails(uid)
    }, [])

    return(
        <>
            <h2 className="text-center m-3">Details Characters</h2>
            <div className="container" >
                <div className="row g-0 mt-3">
                    <div className="col-md-4">
                        <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={store.peopleDetails?.properties.name} />
                    </div>
                    <div className="col-md-8">
                        <h6 className="card-title">{store.peopleDetails?.properties.name}</h6>
                        <p className="card-text">{store.peopleDetails?.description}</p>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae amet aspernatur id facere obcaecati blanditiis. Cupiditate culpa dolorem quis exercitationem nihil repellendus fugiat quisquam iste asperiores odit similique excepturi facere ratione illo aut consequuntur aperiam, dicta labore minima! Consequuntur unde odit optio et itaque, ipsa quisquam voluptate autem cupiditate!</p>
                    </div>
                </div>
                <div className="row text-center mt-3 mb-5">
                    <div className="col">
                        <h6>Gender</h6>
                        <p>{store.peopleDetails?.properties.gender} </p></div>
                    <div className="col">
                        <h6>Birth year</h6>
                        <p>{store.peopleDetails?.properties.birth_year}</p></div>
                    <div className="col">
                        <h6>Eye color</h6>
                        <p>{store.peopleDetails?.properties.eye_color}</p></div>
                    <div className="col">
                        <h6>Hair color</h6>
                        <p>{store.peopleDetails?.properties.hair_color}</p></div>
                    <div className="col">
                        <h6>Mass</h6>
                        <p>{store.peopleDetails?.properties.mass}</p></div>
                    <div className="col">
                        <h6>Height</h6>
                        <p>{store.peopleDetails?.properties.height}</p></div>
                </div>
            </div>
            
        </>
        
    );
};
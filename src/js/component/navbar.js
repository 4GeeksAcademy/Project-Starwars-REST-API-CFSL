import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import starwarsNegro from "../../img/starwarsNegro.jpg"

import { Context } from "../store/appContext";

import '../../styles/navbar.css';


export const Navbar = () => {

	const {store, actions} = useContext(Context);
	const [isDropdownOpen, setIsDropdownOpen]= useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};


	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid dropdown">
				<Link to="/">
					<img src={starwarsNegro} alt="logo" style={{width:"100px", height:"auto"}}/>
				</Link>
				<button className="dropbtn btn btn-primary " onClick={toggleDropdown}>Favoritos
					<span className="favorito-count">{store.favoritos.length}</span>
				</button>
				{isDropdownOpen && (
				<div className="dropdown-content">
					{store.favoritos.length === 0 ? (
						<p>No hay favoritos</p>
					):( 
						store.favoritos.map((favorito,index)=> (
							<div key={index} className="favorito-item d-flex justify-content-between m-2"> 
							<span>{favorito}</span>
							<span onClick={()=> actions.delFavorito(favorito)}><i className="fa-regular fa-trash-can"></i></span>
							</div>
						))
					)}
				</div>
				)}
			</div>
		</nav>
	);
};

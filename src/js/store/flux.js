const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			peopleDetails: null,
			starships: null,
			starshipsDetails: null,
			planets: null,
			planetsDetails: null,
			favoritos: [] // Array de favoritos
			
		},
		actions: {
			//FUNCION AÑADIR A FAVORITOS
			addFavoritos: (item)=> {
				const store = getStore();
				if (!store.favoritos.includes(item)) {
					setStore({ favoritos: [...store.favoritos, item] });
					console.log("añadido a favoritos")
				}
			},

			//FUNCION ELIMINAR DE FAVORITOS
			delFavorito: (item) => {
				const store = getStore();
				setStore({ favoritos: store.favoritos.filter(favorito => favorito !== item) });
				console.log("eliminado de favoritos")

			},

			//FUNCIONES PARA OBTENER DATOS
			getStarshipsDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/starships/'+uid);
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching starships details')
					const data= await resp.json();
					console.log(data)
					setStore({starshipsDetails: data.result})
				} catch (error) {
					console.log(error)
				}
			},
			getStarships: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/starships');
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching starships')
					const data= await resp.json();
					console.log(data)
					setStore({starships: data.results})
				} catch (error) {
					console.log(error)
				}
			},
			getPlanetsDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets/'+uid);
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching planets details')
					const data= await resp.json();
					console.log(data)
					setStore({planetsDetails: data.result})
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets');
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching planets')
					const data= await resp.json();
					console.log(data)
					setStore({planets: data.results})
				} catch (error) {
					console.log(error)
				}
			},
			getPeopleDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people/'+uid);
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching people details')
					const data= await resp.json();
					console.log(data)
					setStore({peopleDetails: data.result})
				} catch (error) {
					console.log(error)
				}
			},
			getPeople: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people');
					console.log(resp)
					if(!resp.ok) throw new Error('Error fetching people')
					const data= await resp.json();
					console.log(data)
					setStore({people: data.results})
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;

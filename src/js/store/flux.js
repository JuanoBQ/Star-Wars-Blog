import c1 from "../../img/Characters/1.png";
import c2 from "../../img/Characters/2.png";
import c3 from "../../img/Characters/3.png";
import c4 from "../../img/Characters/4.webp";
import c5 from "../../img/Characters/5.png";
import c6 from "../../img/Characters/6.png";
import c7 from "../../img/Characters/7.webp";
import c8 from "../../img/Characters/8.png";
import c9 from "../../img/Characters/9.webp";
import c10 from "../../img/Characters/10.jpg";

import v4 from "../../img/Vehicles/4.jpg";
import v7 from "../../img/Vehicles/7.jpeg";
import v6 from "../../img/Vehicles/6.webp";
import v8 from "../../img/Vehicles/8.jpg";
import v14 from "../../img/Vehicles/14.webp";
import v18 from "../../img/Vehicles/18.webp";
import v16 from "../../img/Vehicles/16.webp";
import v19 from "../../img/Vehicles/19.webp";
import v20 from "../../img/Vehicles/20.webp";
import v24 from "../../img/Vehicles/24.webp";

import p1 from "../../img/Planets/1.webp";
import p2 from "../../img/Planets/2.webp";
import p3 from "../../img/Planets/3.jpg";
import p4 from "../../img/Planets/p4.webp";
import p5 from "../../img/Planets/5.webp";
import p6 from "../../img/Planets/p6.webp";
import p7 from "../../img/Planets/p7.webp";
import p8 from "../../img/Planets/8.webp";
import p9 from "../../img/Planets/9.jpg";
import p10 from "../../img/Planets/10.webp";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: (() => {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites && storedFavorites !== "undefined"
          ? JSON.parse(storedFavorites)
          : [];
      })(),
      charactersImg: {
        1: c1,
        2: c2,
        3: c3,
        4: c4,
        5: c5,
        6: c6,
        7: c7,
        8: c8,
        9: c9,
        10: c10,
      },

      vehiclesImg: {
        4: v4,
        7: v7,
        6: v6,
        8: v8,
        14: v14,
        18: v18,
        16: v16,
        19: v19,
        20: v20,
        24: v24,
      },

      planetsImg: {
        1: p1,
        2: p2,
        3: p3,
        4: p4,
        5: p5,
        6: p6,
        7: p7,
        8: p8,
        9: p9,
        10: p10,
      },

      characters: [],
      vehicles: [],
      planets: [],

      characterDetails: null,
      vehicleDetails: null,
      planetDetails: null,
    },

    actions: {
      setFavorites: (newItem, uid, type) => {
        const store = getStore();
        const updatedFavorites = [
          ...store.favorites,
          { name: newItem, id: uid, type: type },
        ];

        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },

      removeFav: (newList) => {
        setStore({ favorites: newList });
        localStorage.setItem("favorites", JSON.stringify(newList));
      },

      getCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          const data = await response.json();
          setStore({ characters: data.results });
        } catch (error) {
          console.error(error);
        }
      },

      getVehicles: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles");
          const data = await response.json();
          setStore({ vehicles: data.results });
        } catch (error) {
          console.error(error);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets");
          const data = await response.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.error(error);
        }
      },

      getCharacterDetails: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/${id}`
          );
          const data = await response.json();
          setStore({ characterDetails: data.result.properties });
        } catch (error) {
          console.log(error);
        }
      },
      getVehicleDetails: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/vehicles/${id}`
          );
          const data = await response.json();
          setStore({ vehicleDetails: data.result.properties });
        } catch (error) {
          console.log(error);
        }
      },

      getPlanetDetails: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/planets/${id}`
          );
          const data = await response.json();
          setStore({ planetDetails: data.result.properties });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;

import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getCharacters();
    actions.getVehicles();
    actions.getPlanets();
  }, []);

  const addFav = (newItem, uid, type) => {
    actions.setFavorites(newItem, uid, type);
  };

  return (
    <div className="DataBank">
      <div className="Databank-Character mt-5 ms-5 me-5">
        <div className="databank-title">
          <h3 className="character">Databank | Characters</h3>
        </div>
        <hr></hr>
        <div className="character-cards d-flex flex-row ">
          {store.characters.map((charac) => (
            <div className="card" key={charac.uid}>
              <div className="img">
                <img
                  src={store.charactersImg[`${charac.uid}`]}
                  style={{ width: "250px", height: "250px" }}
                  alt={charac.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{charac.name}</h5>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    navigate(`/Character/${charac.uid}`);
                  }}
                >
                  <i
                    className="fa-solid fa-person"
                    style={{ color: "white" }}
                  ></i>{" "}
                  info
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    addFav(charac.name, charac.uid, "Character");
                    console.log(store.favorites);
                  }}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="Databank-Vehicles mt-5 ms-5 me-5">
        <div className="databank-title">
          <h3 className="vehicle">Databank | Vehicles</h3>
        </div>
        <hr></hr>
        <div className="vehicles-cards d-flex flex-row ">
          {store.vehicles.map((vehicle) => (
            <div className="card" key={vehicle.uid}>
              <div className="img">
                <img
                  src={store.vehiclesImg[`${vehicle.uid}`]}
                  style={{ width: "250px", height: "250px" }}
                  alt={vehicle.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    navigate(`/Vehicle/${vehicle.uid}`);
                  }}
                >
                  <i
                    className="fa-solid fa-shuttle-space fa-rotate-270"
                    style={{ color: "white" }}
                  ></i>{" "}
                  info
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => addFav(vehicle.name, vehicle.uid, "Vehicle")}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Planetes-Vehicles mt-5 ms-5 me-5">
        <div className="databank-title">
          <h3 className="planet">Databank | Planets</h3>
        </div>
        <hr></hr>
        <div className="planet-cards d-flex flex-row ">
          {store.planets.map((planet) => (
            <div className="card" key={planet.uid}>
              <div className="img">
                <img
                  src={store.planetsImg[`${planet.uid}`]}
                  style={{ width: "250px", height: "250px" }}
                  alt={planet.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    navigate(`/Planet/${planet.uid}`);
                  }}
                >
                  <i
                    className="fa-solid fa-earth-americas"
                    style={{ color: "white" }}
                  ></i>{" "}
                  info
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => addFav(planet.name, planet.uid, "Planet")}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

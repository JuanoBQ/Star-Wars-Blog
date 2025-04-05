import React, { useContext, useEffect } from "react";
import "../../styles/card.css";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const VehicleCard = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getVehicleDetails(id);
  }, [id, actions]);

  const props = store.vehicleDetails;

  if (!props) {
    return (
      <div className="card-title d-flex justify-content-center">Loading...</div>
    );
  }

  return (
    <div className="d-flex align-items-center flex-column">
      <div className="card-info d-flex">
        <div className="img">
          <img src={store.vehiclesImg[`${id}`]} style={{ height: "100%" }} />
        </div>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{props.name}</h3>
          <hr />
          <p>
            The vehicles of Star Wars are advanced and versatile machines that
            vary in design and function, adapting to the different environments
            and needs of the galaxy. From spacecraft like the Millennium Falcon
            or the Imperial Star Destroyer to starfighters like the X-Wing and
            TIE Fighter, each vehicle serves a specific purpose in the battles
            between various factions. They also include terrestrial vehicles
            like the Speeders and giant walkers like the AT-AT, as well as troop
            transports and autonomous droids that play key roles in the galactic
            conflict. With their blend of futuristic technology and iconic
            design, the vehicles of Star Wars are essential to the narrative and
            epic atmosphere of the saga.
          </p>
        </div>
      </div>

      <div className="Properties container d-flex flex-row justify-content-center mt-3">
        <div className="d-flex col-1 flex-column border-end">
          <h6 className="card-title">Consumables</h6>
          <h6 className="card-title">{props.consumables}</h6>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Cargo</h6>
          <h6 className="card-title">{props.cargo_capacity}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Passengers</h6>
          <h6 className="card-title">{props.passengers}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Max Atmosphering Speed</h6>
          <h6 className="card-title">{props.max_atmosphering_speed}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Crew</h6>
          <h6 className="card-title">{props.crew}</h6>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Length</h6>
          <h6 className="card-title">{props.length} m</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Model</h6>
          <h6 className="card-title">{props.model}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Cost</h6>
          <h6 className="card-title">{props.cost_in_credits} credits</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h6 className="card-title">Manufacturer</h6>

          <h6 className="card-title">{props.manufacturer}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4">
          <h6 className="card-title">Class</h6>

          <h6 className="card-title">{props.vehicle_class}</h6>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

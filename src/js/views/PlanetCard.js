import React, { useContext, useEffect, useState } from "react";
import "../../styles/card.css";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

const PlanetCard = () => {

  const { store, actions } = useContext(Context);
  const [props, setProps] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProps = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${id}`
        );
        console.log(response.status);
        const data = await response.json();
        setProps(data.result.properties);
      } catch (error) {
        console.error(error);
      }
    };

    getProps();
  }, []);

  return (
    <div className="d-flex align-items-center flex-column">
      <div className="card-info d-flex">
        <div className="img">
          <img src={store.planetsImg[`${id}`]} style={{ height: "100%" }} />
        </div>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{props.name}</h3>
          <hr></hr>
          <p>
            The planets of Star Wars are diverse and rich in detail, each with
            its own ecosystem, culture, and history. These worlds, ranging from
            desolate deserts to lush jungles or frozen landscapes, serve as the
            backdrop for much of the galaxy's adventures. Some planets, like
            Tatooine, are arid and solitary, home to outcasts and smugglers,
            while others, like Coruscant, are vast urban centers full of
            politics and trade. Hoth is an icy planet where the Rebellion hides,
            while Endor is covered in dense forests and home to the Ewoks.
            Dagobah, a swampy planet, is where Yoda lives in exile, and Naboo is
            known for its natural beauty and distinctive architecture. Each
            planet has its own character and plays a crucial role in the
            narrative, whether as a safe haven, a battlefield, or a key location
            for character development. Together, these worlds contribute to the
            vast and diverse galaxy that brings the Star Wars saga to life.
          </p>
        </div>
      </div>

      <div className="Properties container d-flex flex-row justify-content-center mt-3">
        <div className="d-flex col-1 flex-column border-end">
          <h5 className="card-title">Climate</h5>
          <h6 className="card-title">{props.climate}</h6>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Surface Water</h5>
          <h6 className="card-title">{props.surface_water}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Diameter</h5>
          <h6 className="card-title">{props.diameter} km</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Rotation Period</h5>
          <h6 className="card-title">{props.rotation_period}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Terrain</h5>
          <h6 className="card-title">{props.terrain}</h6>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Gravity</h5>
          <h6 className="card-title">{props.gravity}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Orbital Period</h5>
          <h6 className="card-title">{props.orbital_period}</h6>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h5 className="card-title">Population</h5>

          <h6 className="card-title">{props.population}</h6>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;

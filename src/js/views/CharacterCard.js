import React, { useContext, useEffect, useState } from "react";
import "../../styles/card.css";

import { useParams } from "react-router";
import { Context } from "../store/appContext";

const CharacterCard = () => {



  const {store, actions} = useContext(Context)
  const [props, setProps] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log(store.favorites)
    const getProps = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
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
          <img
            src={store.charactersImg[`${id}`]}
            style={{ height: "100%" }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-contetn-center">
          <h3 className="card-title">{props.name}</h3>
          <hr></hr>
          <p>
            The characters of Star Wars are diverse and complex, encompassing a
            wide range of roles and personalities. From brave heroes like Jedi
            and pilots to dark villains like Sith and bounty hunters, each one
            faces their own inner conflict and fights for their ideals in a
            galaxy far, far away. Some are wise and experienced, while others
            are young and inexperienced, but all are marked by their
            relationship with the Force, whether as defenders of peace or agents
            of chaos. Through their journeys, these characters face challenges,
            betrayals, and sacrifices, as they search for their purpose and
            fight for balance between good and evil.
          </p>
        </div>
      </div>
      <div className="Properties container d-flex flex-row justify-content-center mt-3">
        <div className="d-flex col-1 flex-column border-end">
          <h4 className="card-title">Gender</h4>
          <h5 className="card-title">{props.gender}</h5>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h4 className="card-title">Skin</h4>
          <h5 className="card-title">{props.skin_color}</h5>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h4 className="card-title">Hair</h4>
          <h5 className="card-title">{props.hair_color}</h5>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h4 className="card-title">Eyes</h4>
          <h5 className="card-title">{props.eye_color}</h5>
        </div>
        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h4 className="card-title">Height</h4>
          <h5 className="card-title">{props.height} cm</h5>
        </div>

        <div className="d-flex col-1 flex-column ms-4 border-end">
          <h4 className="card-title">Mass</h4>
          <h5 className="card-title">{props.mass} kg</h5>
        </div>
        <div className="d-flex col-1 flex-column ms-4">
          <h4 className="card-title">Birth Year</h4>
          <h5 className="card-title">{props.birth_year}</h5>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

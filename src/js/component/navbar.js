import React, { useContext, useEffect, useState } from "react";
import "../../styles/navbar.css";
import SWwhite from "../../img/SWwhite.png";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const deleteFav = (index) => {
    actions.removeFav(store.favorites.filter((item, i) => index != i));
  };

  return (
    <nav className="navbar mb-3 d-flex flex-column border-bottom">
      <div className="Star-Wars d-flex">
        <img src={SWwhite} style={{ width: "200px" }} />
      </div>
      <div className="button fav d-flex align-items-center mb-3 mt-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa-solid fa-heart"> {store.favorites.length}</i>
          </button>
          <div className="dropdown-menu">
          {store.favorites.map((item, index) => {
              return (
                <div className="d-flex" key={index}>
                  <a
                    className="dropdown-item"
                    href={`/${item.type}/${item.id}`}
                    key={index}
                  >
                    {item.name}
                  </a>
                  <button
                    type="button"
                    className="btn-close m-1"
                    style={{ color: "red" }}
                    onClick={() => deleteFav(index)}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

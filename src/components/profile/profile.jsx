import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./profile.css";
import axios from "axios";

function Profile() {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyBv9EGvHDA-Ir2xbkDVUQhDc5zALNe5TL8",
  });
  const [user, setUser] = useState(null);
  const [state, setState] = useState("photos");

  if (user === null) {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        // handle success
        setUser(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const onClickAbout = () => {
    setState("about");
  };

  const onClickPhotos = () => {
    setState("photos");
  };

  const onClickLocation = () => {
    setState("location");
  };

  const mapa = () => {};

  if (user !== null) {
    console.log(user[0].location.coordinates.latitude);
    console.log(user[0].location.coordinates.longitude);

    return (
      <div className="body">
        <div className="header-wrapper">
          <header></header>
          <div className="cols-container">
            <div className="left-col">
              <div className="img-container">
                <img src={user[0].picture.large} alt="Profile" />
                <span></span>
              </div>
              <h2>
                {user[0].name.first} {user[0].name.last}
              </h2>
              <p>UI/UX Designer</p>
              <p>{user[0].email}</p>

              <ul className="about">
                <li>
                  <span>4,073</span>Followers
                </li>
                <li>
                  <span>322</span>Following
                </li>
                <li>
                  <span>200,543</span>Atractions
                </li>
              </ul>

              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  cum necessitatibus fugiat amet! Iusto tenetur nihil quo
                  voluptatibus, quam doloribus nobis assumenda ipsa consequatur
                  praesentium, laboriosam minima illo aspernatur? Non!
                </p>

                <ul>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-pinterest"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-dribbble"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right-col">
              <nav>
                <ul>
                  <li>
                    <a href="#" onClick={onClickPhotos}>
                      photos
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={onClickAbout}>
                      about
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={onClickLocation}>
                      Location
                    </a>
                  </li>
                </ul>
                <button>Follow</button>
              </nav>

              {state === "photos" ? (
                <div className="photos">
                  <img
                    src="https://i.blogs.es/a79716/filtros-naturaleza-nueva/1366_2000.jpg"
                    alt="feed"
                  />
                  <img
                    src="https://www.blogdelfotografo.com/wp-content/uploads/2019/02/johannes-plenio-629984-unsplash.jpg"
                    alt="feed"
                  />
                  <img
                    src="https://wgsustentable.com/wp-content/uploads/2021/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg"
                    alt="feed"
                  />
                  <img
                    src="https://www.dzoom.org.es/wp-content/uploads/2019/10/naturaleza-macro-insecto-abeja-flores.jpg"
                    alt="feed"
                  />
                  <img
                    src="https://definicion.de/wp-content/uploads/2009/04/naturaleza-1.jpg"
                    alt="feed"
                  />
                  <img
                    src="https://spanish.xinhuanet.com/photo/2015-12/18/134912413_14502731142871n.jpg"
                    alt="feed"
                  />
                </div>
              ) : null}

              {state === "about" ? (
                <div className="about-settings">
                  <div className="settings-parrafo">
                    <h3>Name:</h3>
                    <p>
                      {user[0].name.first} {user[0].name.last}
                    </p>
                  </div>
                  <div className="settings-parrafo">
                    <h3>Email:</h3>
                    <p>{user[0].email}</p>
                  </div>
                  <div className="settings-parrafo">
                    <h3>Phone:</h3>
                    <p>{user[0].phone}</p>
                  </div>
                  <div className="settings-parrafo">
                    <h3>Address:</h3>
                    <p>
                      {user[0].location.street.name}{" "}
                      {user[0].location.street.number}
                    </p>
                  </div>
                  <div className="settings-parrafo">
                    <h3>Sex:</h3>
                    <p>{user[0].gender}</p>
                  </div>
                </div>
              ) : null}

              {state === "location" ? (
                <div>
                  <GoogleMap
                    zoom={10}
                    center={{ lat: 44, lng: -80 }}
                    mapContainerClassName="map-container"
                  >
                    <Marker position={{ lat: 44, lng: -80 }}></Marker>
                  </GoogleMap>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }
}

export default Profile;

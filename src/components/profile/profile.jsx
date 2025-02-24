import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./profile.css";

function Profile() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GooleApiKey,
  });
  const [state, setState] = useState("photos");
  const [follow, setFollow] = useState(false);

  const onClickAbout = () => {
    setState("about");
  };

  const onClickPhotos = () => {
    setState("photos");
  };

  const onClickLocation = () => {
    setState("location");
  };

  const center = {
    lat: -34.593451,
    lng: -58.376474,
  };

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="body">
      <div className="header-wrapper">
        <header></header>
        <div className="cols-container">
          <div className="left-col">
            <div className="img-container">
              <img
                src="https://media.istockphoto.com/id/1437816897/es/foto/mujer-de-negocios-gerente-o-retrato-de-recursos-humanos-para-el-%C3%A9xito-profesional-la-empresa.jpg?s=612x612&w=0&k=20&c=UUQMt4QvYIlD3OUT_Q81nZLTML6vb5X5bwMLjznVNuk="
                alt="Profile"
              />
              <span></span>
            </div>
            <h2>Joaquina Mendez</h2>
            <p>UI/UX Designer</p>
            <p>la_joqui@gmail.com</p>

            <ul className="about">
              <li>
                <span>{!follow ? "4,073" : "4,074"}</span>Followers
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
                <li
                  onClick={() => {
                    onClickOpenUrl("https://x.com/");
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
                <li
                  onClick={() => {
                    onClickOpenUrl("https://pinterest.com");
                  }}
                >
                  <i
                    className="fab fa-pinterest"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
                <li
                  onClick={() => {
                    onClickOpenUrl("https://www.facebook.com/");
                  }}
                >
                  <i
                    className="fab fa-facebook"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
                <li
                  onClick={() => {
                    onClickOpenUrl("https://dribbble.com/");
                  }}
                >
                  <i
                    className="fab fa-dribbble"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-col">
            <nav>
              <ul>
                <li>
                  <button onClick={onClickPhotos}>photos</button>
                </li>
                <li>
                  <button onClick={onClickAbout}>about</button>
                </li>
                <li>
                  <button onClick={onClickLocation}>Location</button>
                </li>
              </ul>
              {!follow ? (
                <button onClick={() => setFollow(true)}>Follow</button>
              ) : (
                <button onClick={() => setFollow(false)}>Following</button>
              )}
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
                  <p>Joaquina Mendez</p>
                </div>
                <div className="settings-parrafo">
                  <h3>Email:</h3>
                  <p>la_joqui@gmail.com</p>
                </div>
                <div className="settings-parrafo">
                  <h3>Phone:</h3>
                  <p>113-753-4481</p>
                </div>
                <div className="settings-parrafo">
                  <h3>Address:</h3>
                  <p>Avenida Siempre Viva 123</p>
                </div>
                <div className="settings-parrafo">
                  <h3>Sex:</h3>
                  <p>Femenino</p>
                </div>
              </div>
            ) : null}

            {state === "location" && isLoaded ? (
              <div>
                <GoogleMap
                  zoom={10}
                  center={center}
                  mapContainerClassName="map-container"
                >
                  <Marker position={center}></Marker>
                </GoogleMap>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

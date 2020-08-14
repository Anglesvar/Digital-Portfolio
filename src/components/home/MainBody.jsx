import React, { useState } from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
  icons,
} from "../../editable-stuff/configurations.json";
const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div
      id="home"
      className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <div className="container container-fluid text-center ">
        <h6 className="display-4">
          {FirstName + " " +MiddleName+" "+ LastName}
        </h6>

        <Typist className="lead"> {devDesc}</Typist>
        <div className="p-5">
          {icons.map((icon) => (
            <a
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              className="social-icon-rotate"
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i
                className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                onMouseOver={() => toggleHover({ icon, event: "enter" })}
                onMouseOut={() => toggleHover({ icon, event: "leave" })}
              />
            </a>
          ))}
        </div>
        <a class="btn btn-slice" href="#aboutme" aria-label="Learn more about me">
        <div class="top"><span>More About me</span></div>
        <div class="bottom"><span>More About me</span></div>
      </a>

      </div>
      
    </div>
  );
};

export default MainBody;

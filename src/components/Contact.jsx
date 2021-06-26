import React, { useState } from "react";
import emoji from "react-easy-emoji";
import { icons, mobileNumber, emailId } from "../editable-stuff/configurations.json";
import '../common.scss';

const Contact = () => {
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
    <div className="contact-card">
        <div className="wrapper">
            <h1 className="display-4 mb-5 text-center text-center">Interested in working together? <span>{emoji("☕")}</span></h1>
            <div className="contact-seperate-section row">
                <div className="col-md-6 text-center right-line d-flex flex-column justify-content-center align-items-center">Mobile <a href={"tel:+91-" + mobileNumber}>(+91) {mobileNumber}</a></div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center">Email <a href={"mailto:" + emailId}>{emailId}</a> </div>
            </div>
            <div className="icons">
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
                            style={{color:'black'}}
                            onMouseOver={() => toggleHover({ icon, event: "enter" })}
                            onMouseOut={() => toggleHover({ icon, event: "leave" })}
                        />
                    </a>
                ))}
            </div>
        </div>
    </div>)
}

export default Contact;

import React from "react";
import {
  aboutHeading,
  aboutDescription,
  resumeLink
} from "../../editable-stuff/configurations.json";
import Particles from "react-particles-js";
import emoji from "react-easy-emoji";

const AboutMe = () => {

  return (
    <div id="aboutme" className=" m-0 " style={{ paddingTop: "30px" }}>
      <Particles
        style={{ color: "black", position: "absolute", height: "50%" }}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            "color": {
              "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#b6b2b2"
              }
            },
            "opacity": {
              "value": 0.5211089197812949,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 1,
                "sync": false
              }
            },
            "size": {
              "value": 8.017060304327615,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 12.181158184520175,
                "size_min": 0.1,
                "sync": true
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#c8c8c8",
              "opacity": 0.9,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }}
      />
      <div className="p-5">
        <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
        <div className="row">
          <div className="col-md-5 mt-5">
            <p className="lead text-center"><span>Hi!</span><span className="wave-emoji">{emoji("👋")}</span>{aboutDescription}</p>
            {resumeLink && (
              <p className="lead text-center">
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  <div class="btn-custom btn-two">
                    <span>Resume</span>
                  </div>
                </a>
              </p>
            )}
          </div>
          <div className="col-md-7">
              <img className="aboutMe-avatar-sizing" src={process.env.PUBLIC_URL + 'programmer.svg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

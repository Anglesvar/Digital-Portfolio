import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CircularProgressbar } from 'react-circular-progressbar';
import Particles from "react-particles-js";

import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (

    <div>
      <Particles style={{ zIndex: 0, position: 'absolute'}}
        params={{
          "particles": {
            "number": {
              "value": 10,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "speed": 1,
              "out_mode": "out"
            },
            "shape": {
              "type": [
                "image"
              ],
              "image": [
                { src: 'https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667', height: 20, width: 20 },
                { src: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', height: 20, width: 20 },
                { src: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg', height: 30, width: 28 },
                { src: 'https://cdn.iconscout.com/icon/free/png-512/battlenet-555458.png', height: 20, width: 20 },
                { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png', height: 20, width: 20 }
              ]
            },
            
            "size": {
              "value": 25,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": true
              }
            }
          },
          "retina_detect": true
        }} />
      <div id="skills" className="jumbotron jumbotron-fluid m-0" style={{ paddingTop: 170, background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ),url('https://chubb-spotify.s3.ap-south-1.amazonaws.com/new1.jpg')" }}>
        <div className="container ">

          {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}


          <div className="d-inline align-self-center">
            <h1 className="display-4 text-center color-white lead">Skills</h1>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 color-white">
                <br />
                <p className="lead">JavaScipt
                  <ProgressBar animated variant="success" now={90} label={`90%`} />
                </p>
                <p className="lead">C#
                  <ProgressBar animated  variant="primary" now={80} label={`80%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">C/C++
                  <ProgressBar animated variant="info" now={75} label={`75%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">TypeScript
                  <ProgressBar animated variant="info" now={70} label={`70%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">Python
                  <ProgressBar animated variant="danger" now={40} label={`40%`} style={{ backgroundColor: 'white' }} />
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 color-white ">
                <br />
                <p className="lead">HTML/CSS
                <ProgressBar animated variant="success" now={90} label={`90%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">SQL
                <ProgressBar animated variant="primary" now={80} label={`80%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">Bootstrap/Materialize/Angular-Material
                  <ProgressBar animated variant="info" now={70} label={`70%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">Angular
                <ProgressBar animated variant="primary" now={80} label={`80%`} style={{ backgroundColor: 'white' }} />
                </p>
                <p className="lead">React
                <ProgressBar animated variant="warning" now={50} label={`50%`} style={{ backgroundColor: 'white' }} />
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import GitCard from "./GitCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../editable-stuff/configurations.json";
import Particles from 'react-particles-js';
import '../../common.scss';

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        return console.error(error.message);
      })
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0 projectBg" style={{background: "linear-gradient(169deg, black 69%, white 31%)", color: "white"}}>
		<Particles style={{zIndex:0,position:"absolute"}}
			height="180%"
			params={{
				"particles": {
					"number": {
						"value": 150,
						"density": {
							"enable": true
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"speed": 4,
							"size_min": 0.3
						}
					},
					"line_linked": {
						"enable": false
					},
					"move": {
						"random": true,
						"speed": 1,
						"direction": "bottom",
						"out_mode": "out"
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "repulse"
						}
					},
					"modes": {
						"bubble": {
							"distance": 250,
							"duration": 2,
							"size": 0,
							"opacity": 0
						},
						"repulse": {
							"distance": 100,
							"duration": 1
						}
					}
				}
			}} 
		/>
			{projectsArray.length && (
				<div className="m-2 p-3">
					<h1 className="display-4 mb-5 text-center">{projectHeading}</h1>
					<div className="row flex-row-reverse">
						<div className="col-md-5">
							{projectsArray.map((project) => (
								<GitCard  key={project.id} id={project.id} value={project}/>
							))}
						</div>
						<div className="col-md-7">
							<img className="myWorks-avatar-sizing" src={process.env.PUBLIC_URL + "developerActivity.svg"} alt="" />
						</div>
					</div>
				</div>
			)}
    </div>
  );
};

export default Project;

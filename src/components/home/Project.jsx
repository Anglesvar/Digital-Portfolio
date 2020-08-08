import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../editable-stuff/configurations.json";
import Particles from 'react-particles-js';

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        // handle success
		// console.log(response.data.slice(0, 4));
		console.log(response);
		// response.data.forEach(function(item, index, object) {
		// 	if (item.name === 'spotify') {
		// 	  object.splice(index, 1);
		// 	}
		//   })
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
		// always executed
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0 projectBg">
   <Particles style={{zIndex:0,position:"absolute"}}
   height="180%"
    params={{
	    "particles": {
	        "number": {
	            "value": 360,
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
	}} />
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5" style={{color: "white", fontWeight: "700"}}>{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
			  <ProjectCard key={project.id} id={project.id} value={project}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

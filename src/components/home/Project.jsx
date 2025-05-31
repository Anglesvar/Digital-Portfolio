import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import GitCard from "./GitCard";
import editableStuff from "../../editable-stuff/configurations.json"
import '../../common.scss';

const Project = () => {
	const [projectsArray, setProjectsArray] = useState([]);

	const handleRequest = useCallback((e) => {
		axios
			.get(editableStuff.gitHubLink +editableStuff.gitHubUsername + editableStuff.gitHubQuerry)
			.then((response) => {
				return setProjectsArray(response.data.slice(0, editableStuff.projectsLength));
			})
			.catch((error) => {
				return console.error(error.message);
			})
	}, []);

	useEffect(() => {
		handleRequest();
	}, [handleRequest]);

	return (
		<div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0 projectBg" style={{ background: "linear-gradient(169deg, white 69%, white 31%)", color: "white" }}>
			{projectsArray.length && (
				<div className="m-2 p-3">
					<h1 className="display-4 mb-5 text-center">{editableStuff.projectHeading}</h1>
					<div className="row flex-row-reverse">
						<div className="col-md-5">
							{projectsArray.map((project) => (
								<GitCard key={project.id} id={project.id} value={project} />
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

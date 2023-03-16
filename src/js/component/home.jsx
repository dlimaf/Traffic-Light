import React, { useState } from "react";

import "../../styles/index.css";

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("red");
	

	return  (
		<div>
		    <div className="container">
			    <div className="d-flex justify-content-center">
				    <div className="topsemaforo"></div>
				    <div className="semaforo">
				        <div
					    onClick={()=>setColor("red")}
					    className={"red light" + (color === "red" ? " selected" : "")}>
					    </div>
				        <div 
					    onClick={()=>setColor("yellow")}
						className={"yellow light" + (color === "yellow" ? " selected" : "")}>
					    </div>
				        <div  
					    onClick={()=>setColor("green")}
						className={"green light" + (color === "green" ? " selected" : "")}>
					    </div>
				    </div>
			    </div>
		    </div>
		</div>
	);
};

export default Home;

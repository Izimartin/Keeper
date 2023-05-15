import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function InitRoutes() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

export default InitRoutes;

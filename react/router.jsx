import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing.jsx"




export default (
	<Switch>
		<Route
			component={ Landing }
			exact
			path="/"
		/>
	</Switch>
)

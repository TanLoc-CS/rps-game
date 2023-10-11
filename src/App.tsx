import React from "react";
import { Route, Routes } from "react-router";

import routes from "./routes";

function App() {
	return (
		<div className="App">
			<Routes>
				{routes.map((route) => {
					const Page = route.component;
					return (
						<Route path={route.path} element={<Page />} key={route.path} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;

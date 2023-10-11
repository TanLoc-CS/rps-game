import React from "react";
import { Route, Routes } from "react-router";

import Auth from "components/Auth";
import routes from "./routes";

function App() {
	return (
		<div className="App">
			<Routes>
				{routes.map((route) => {
					const Page = route.component;
					if (route.isAuth)
						return (
							<Route
								path={route.path}
								element={
									<Auth>
										<Page />
									</Auth>
								}
								key={route.path}
							/>
						);
					return (
						<Route path={route.path} element={<Page />} key={route.path} />
					);
				})}
			</Routes>
		</div>
	);
}

export default App;

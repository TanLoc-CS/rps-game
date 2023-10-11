import React from "react";

import Button from "./Button";

const NavBar = () => {
	const username = sessionStorage.getItem("username");

	return (
		<div className="w-full md:h-10 flex flex-row justify-between items-center">
			<h1 className="text-xl font-semibold">/Rock Paper Scissors/</h1>
			<div className="h-10 flex flex-row justify-end items-center">
				<p className="text-lg mx-9">Hi, {username}</p>
				<Button size="small" name="Quit" />
			</div>
		</div>
	);
};

export default NavBar;

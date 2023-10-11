import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }: { children: JSX.Element }) => {
	let location = useLocation();

	if (!sessionStorage.getItem("username")) {
		// Redirect them to the HomePage if they haven't enter username
		alert("Please enter your username! And try again");
		return <Navigate to="/" state={{ from: location }} replace />;
	}

	return children;
};

export default Auth;

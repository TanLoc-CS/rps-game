import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "components/NavBar";
import Card from "components/Card";
import Dual from "assets/Dual.svg";

const PickRPSPage = () => {
	let RPSRef = useRef(0);
	const navigate = useNavigate();

	// onClick={() => navigate("/gameplay/" + choice, { replace: true })}

	const handleClick = (choice: number) => {
		RPSRef.current = choice;
		navigate("/gameplay/" + choice, { replace: true });
	};

	return (
		<div className="w-full md:h-fit md:p-8 flex flex-col justify-start items-center">
			<NavBar></NavBar>
			<img src={Dual} alt="dual" className="w-[333px] h-[333px]" />
			<div className="w-4/6 flex flex-row justify-between items-center">
				<Card choice={1} func={handleClick}></Card>
				<Card choice={2} func={handleClick}></Card>
				<Card choice={3} func={handleClick}></Card>
			</div>
			<p className="mt-10 text-xl font-semibold">/Choose one of the items/</p>
		</div>
	);
};

export default PickRPSPage;

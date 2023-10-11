import React from "react";
import { useNavigate } from "react-router-dom";

import Paper from "assets/Paper.svg";
import Rock from "assets/Rock.svg";
import Scissors from "assets/Scissors.svg";

interface CardProps {
	choice: number;
	// func: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Card = (props: CardProps) => {
	const { choice } = props;
	const navigate = useNavigate();
	const images = [Paper, Rock, Scissors];

	return (
		<div
			className="w-[280px] h-[360px] flex flex-col justify-center items-center hover:-translate-y-2 active:bg-gray-100 rounded-lg shadow-2xl"
			onClick={() => navigate("/gameplay/" + choice, { replace: true })}
		>
			<img
				src={images[choice - 1]}
				alt="card"
				className="w-[222px] h-[222px]"
			/>
		</div>
	);
};

export default Card;

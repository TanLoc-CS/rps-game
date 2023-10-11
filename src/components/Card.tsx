import React from "react";

import Paper from "assets/Paper.svg";
import Rock from "assets/Rock.svg";
import Scissors from "assets/Scissors.svg";

interface CardProps {
	item: number;
	// func: React.Dispatch<React.SetStateAction<number | undefined>>;
	func?: (item: number) => void | undefined;
}

const Card = (props: CardProps) => {
	const { item, func } = props;
	const images = [Paper, Rock, Scissors];
	// Card got func as prop will be used in the PickRPSPage
	// The func will set the RPSRef in PickRPS without rerendering to navigate to the ResultPage
	if (func)
		return (
			<div
				className="w-[280px] h-[360px] flex flex-col justify-center items-center hover:-translate-y-2 hover:cursor-pointer active:bg-gray-100 active:cursor-pointer rounded-lg shadow-2xl"
				onClick={() => func(item)}
			>
				<img
					src={images[item - 1]}
					alt="card"
					className="w-[222px] h-[222px]"
				/>
			</div>
		);
	// This will be used for ResultPage
	return (
		<div className="w-[280px] h-[360px] flex flex-col justify-center items-center rounded-lg shadow-2xl">
			<img src={images[item - 1]} alt="card" className="w-[222px] h-[222px]" />
		</div>
	);
};

export default Card;

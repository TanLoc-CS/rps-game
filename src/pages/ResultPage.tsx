import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import NavBar from "components/NavBar";
import Card from "components/Card";
import Button from "components/Button";

import { getRandomInt } from "helpers/getRandomInt";

const ResultPage = () => {
	let result = -1;
	const navigate = useNavigate();
	const { item } = useParams();
	const botItem = getRandomInt(1, 3);
	const resultText = ["YOU LOSE :P", "DRAW", "YOU WIN :D"];

	if (
		(Number(item) === 1 && botItem === 3) ||
		(Number(item) === 2 && botItem === 1) ||
		(Number(item) === 3 && botItem === 2)
	)
		result = 0;
	else if (Number(item) === botItem) result = 1;
	else result = 2;

	const handlePlayAgain = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.preventDefault();
		navigate("/gameplay", { replace: true });
	};
	// console.log(`me: ${item} X bot:${botItem} => result:${result}`);

	return (
		<div className="w-full md:h-fit md:p-8 flex flex-col justify-start items-center">
			<NavBar />
			{
				<p className="text-[40px] font-medium my-[100px]">
					{resultText[result]}
				</p>
			}
			<div className="w-4/6 mb-10 flex flex-row justify-between items-center">
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium mb-5">
						{sessionStorage.getItem("username")}
					</p>
					<Card item={Number(item)} />
				</div>
				<p className="font-medium">/VS/</p>
				<div className="flex flex-col justify-center items-center">
					<p className="font-medium mb-5">Bot</p>
					<Card item={botItem} />
				</div>
			</div>
			<Button size="normal" name="Play again" func={handlePlayAgain} />
		</div>
	);
};

export default ResultPage;

import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "components/NavBar";
import Button from "components/Button";

const InstructionPage = () => {
	const navigate = useNavigate();
	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.preventDefault();
		navigate("/gameplay", { replace: true });
	};

	return (
		<div className="w-full md:h-full md:p-8 flex flex-col justify-start items-center">
			<NavBar />
			<div className="md:w-[560px] md:h-fit mt-[200px] py-6 px-10 flex flex-col justify-start items-center shadow-2xl rounded-lg">
				<h2 className="text-[32px] font-semibold">/Rules/</h2>
				<div className="md:w-[480px] mb-10 h-fit text-2xl mt-5 flex flex-col justify-start">
					<p>1. Rock wins against scissors.</p>
					<p>2. Scissors win against paper.</p>
					<p>3. Paper wins against rock.</p>
					<p>4. The same is a draw.</p>
				</div>
				<Button size="normal" name="Continue" func={handleClick} />
			</div>
		</div>
	);
};

export default InstructionPage;

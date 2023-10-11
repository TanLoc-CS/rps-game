import React from "react";
import { useNavigate } from "react-router-dom";

interface buttonProps {
	size: string;
	name: string;
	func?: any;
}

const Button = (props: buttonProps) => {
	const { size, name, func } = props;
	const navigate = useNavigate();

	const handleQuit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.preventDefault();
		sessionStorage.clear();
		navigate("/", { replace: true });
	};

	if (size === "Login")
		return (
			<button
				type="submit"
				className="w-[480px] h-[60px] hover:bg-neutral-700 focus:bg-black text-white bg-black rounded-lg"
			>
				{name}
			</button>
		);

	if (name === "Quit")
		return (
			<button
				className="w-[120px] h-[40px] hover:bg-neutral-700 focus:bg-black text-white bg-black rounded-lg"
				onClick={handleQuit}
			>
				{name}
			</button>
		);

	return (
		<button
			className="w-[480px] h-[60px] hover:bg-neutral-700 focus:bg-black text-white bg-black rounded-lg"
			onClick={func}
		>
			{name}
		</button>
	);
};

export default Button;

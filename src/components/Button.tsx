import React from "react";

interface buttonProps {
	size: string;
	name: string;
}

const Button = (props: buttonProps) => {
	const { size, name } = props;

	if (size === "normal") {
		return (
			<button
				type="submit"
				className="w-[480px] h-[60px] hover:bg-neutral-700 focus:bg-black text-white bg-black rounded-lg"
			>
				{name}
			</button>
		);
	}
	return (
		<button
			type="submit"
			className="w-[120px] h-[40px] hover:bg-neutral-700 focus:bg-black text-white bg-black rounded-lg"
		>
			{name}
		</button>
	);
};

export default Button;

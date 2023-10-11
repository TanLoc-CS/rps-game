import React from "react";

import Button from "components/Button";

const HomePage = () => {
	return (
		<div className="w-full md:h-full md:p-8 flex flex-col">
			<h1 className="text-xl font-semibold">/Rock Paper Scissors/</h1>
			<div className="w-full h-[600px] flex flex-row justify-center">
				<form className="md:w-[560px] md:h-[480px] mt-[200px] p-10 flex flex-col justify-start items-start shadow-2xl rounded-lg">
					<p className="text-2xl">Welcome!</p>
					<div className="my-7">
						<h2 className="text-[32px] font-semibold">/Rock Paper Scissors/</h2>
						<p className="text-xl">Let's dual!</p>
					</div>
					<div className="mb-[60px]">
						<p className="text-xl mb-2">Username</p>
						<input
							type="text"
							placeholder="Enter your username"
							className="w-[480px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
						/>
					</div>
					<Button size="normal" name="Login" />
				</form>
			</div>
		</div>
	);
};

export default HomePage;

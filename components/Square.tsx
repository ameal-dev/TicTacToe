import React from "react";

const Square: React.FC<{ square: number }> = ({ square }) => {
	return (
		<div className='border h-full w-1/3 text-white flex justify-center items-center text-6xl cursor-pointer'>
			{square}
		</div>
	);
};

export default Square;

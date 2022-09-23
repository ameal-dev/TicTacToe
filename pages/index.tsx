import type { NextPage } from "next";
import Board from "../components/Board";

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen w-screen flex flex-col '>
			<Board />
		</div>
	);
};

export default Home;

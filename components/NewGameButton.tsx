import { useDispatch } from "react-redux";
import { resetBoard } from "../store/gameSlice";

const NewGameButton = () => {
	const dispatch = useDispatch();
	const handleClickNewGame = () => {
		dispatch(resetBoard());
	};

	return (
		<button
			className='px-4 py-2 border-4 border-white rounded-xl bg-black text-white text-xl font-bold w-40 mt-[140px] absolute animate-wiggle ease-in'
			onClick={handleClickNewGame}
		>
			NEW GAME
		</button>
	);
};

export default NewGameButton;

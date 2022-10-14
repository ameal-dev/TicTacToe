import Row from "./Row";
import Square from "./Square";
import {boardSize} from "../gameSettings";
import {getLoopableBoard} from "../utils/calculateResult";

const Board = () =>
	<div className='w-[600px] h-[600px] border-white border flex flex-col m-auto mt-30'>
		<Row>
			<Square square={0} />
			<Square square={1} />
			<Square square={2} />
		</Row>
		<Row>
			<Square square={3} />
			<Square square={4} />
			<Square square={5} />
		</Row>
		<Row>
			<Square square={6} />
			<Square square={7} />
			<Square square={8} />
		</Row>
	</div>;

export default Board;

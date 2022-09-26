import Row from "./Row";
import Square from "./Square";

const Board = () => {
	return (
		<div className='w-[600px] h-[600px] border-white border flex flex-col m-auto'>
			<Row>
				<Square row={0} square={0} />
				<Square row={0} square={1} />
				<Square row={0} square={2} />
			</Row>
			<Row>
				<Square row={1} square={3} />
				<Square row={1} square={4} />
				<Square row={1} square={5} />
			</Row>
			<Row>
				<Square row={2} square={6} />
				<Square row={2} square={7} />
				<Square row={2} square={8} />
			</Row>
		</div>
	);
};

export default Board;

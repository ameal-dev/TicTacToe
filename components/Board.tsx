import Row from "./Row";
import Square from "./Square";

const Board = () => {
	return (
		<div className='w-[600px] h-[600px] border-white border flex flex-col m-auto'>
			<Row>
				<Square square={1} />
				<Square square={2} />
				<Square square={3} />
			</Row>
			<Row>
				<Square square={4} />
				<Square square={5} />
				<Square square={6} />
			</Row>
			<Row>
				<Square square={7} />
				<Square square={8} />
				<Square square={9} />
			</Row>
		</div>
	);
};

export default Board;

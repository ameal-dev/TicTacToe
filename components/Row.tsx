import { ReactNode } from "react";
import Square from "./Square";

const Row: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <div className='border border-white h-1/3 flex'>{children}</div>;
};

export default Row;

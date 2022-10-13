import {boardSize} from "../gameSettings";

export const calculateResult = (...tilesResults: string[]) =>
  tilesResults.reduce((acc, curr) => `${acc}${curr}`, '');

export const getLoopableBoard = () => [...Array(boardSize).keys()];

export const getHorizontalKeys = (rowIndex: number) => getLoopableBoard()
  .map((index) => index + (boardSize*rowIndex));

export const getVerticalKeys = (rowIndex: number) => getLoopableBoard()
  .map((index) => (index * boardSize) + rowIndex);

export const getDiagonalKeysStartingLeft = () => getLoopableBoard()
  .map((index) => (index*(boardSize + 1)));

export const getDiagonalKeysStartingRight = () => getLoopableBoard()
  .map((index) => ((boardSize * (index + 1))) - index - 1);

export const getPossibleWinningCombinations = () => {
  const board = getLoopableBoard();
  const horizontalScenarios = board.map((rowIndex: number) => getHorizontalKeys(rowIndex));
  const verticalScenarios = board.map((rowIndex: number) => getVerticalKeys(rowIndex));
  const diagonalFromLeft = getDiagonalKeysStartingLeft();
  const diagonalFromRight = getDiagonalKeysStartingRight();

  return [
    ...horizontalScenarios,
    ...verticalScenarios,
    diagonalFromLeft,
    diagonalFromRight
  ];
}

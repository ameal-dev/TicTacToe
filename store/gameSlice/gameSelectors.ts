import {RootState} from "../index";
import {boardSize, winRequirement} from "../../gameSettings";
import {
  calculateResult,
  getDiagonalKeysStartingLeft, getDiagonalKeysStartingRight,
  getHorizontalKeys,
  getLoopableBoard, getPossibleWinningCombinations,
  getVerticalKeys
} from "../../utils/calculateResult";
import {PLAYER_ONE_SYMBOL, PLAYER_SYMBOLS, PLAYER_TWO_SYMBOL} from "../../constans";
import exp from "constants";

export const selectGameState = (state: RootState) => state.game;

export const selectBoard = (state: RootState) =>
  selectGameState(state).board;

export const selectTile = (state: RootState, tileIndex: number) =>
  selectBoard(state)[tileIndex];

export const selectTileIsValid = (state: RootState, tileIndex: number) =>
  !selectTile(state, tileIndex).length;

export const selectIsWinningTile = (state: RootState, tileIndex: number) => {
  const winningRow = selectWinningRow(state);
  return winningRow && winningRow.includes(tileIndex);
}

export const selectTiles = (state: RootState, ...tiles: number[]) => {
  const board = selectBoard(state);
  return tiles.reduce((acc, tileIndex) => ({
    ...acc,
    [tileIndex]: board[tileIndex],
  }), {});
}

export const selectBoardIsFull = (state: RootState) =>
  selectBoard(state).join('').length === selectBoard(state).length;

export const selectIsFirstPlayersTurn = (state: RootState) =>
  selectGameState(state).firstPlayer;

export const selectCurrentPlayerSymbol = (state: RootState) =>
  PLAYER_SYMBOLS[+selectIsFirstPlayersTurn(state)];

export const selectCompareTileResults = (state: RootState, ...tiles: number[]) =>
  calculateResult(...Object.values(selectTiles(state, ...tiles)));

export const selectPlayersPoints = (state: RootState) =>
  selectGameState(state).playersPoints;

export const selectPlayerPoints = (state: RootState, index: number) =>
  selectPlayersPoints(state)[index];

export const selectWinningRow = (state: RootState) =>
  getPossibleWinningCombinations().find((arr) => {
    const rowResult = selectCompareTileResults(state, ...arr);

    return rowResult === PLAYER_ONE_SYMBOL.repeat(winRequirement)
      || rowResult === PLAYER_TWO_SYMBOL.repeat(winRequirement);
  });

export const selectIsGameOver = (state: RootState) => !!selectWinningRow(state) || selectBoardIsFull(state);

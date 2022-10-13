// @ts-ignore
import {
  actionAdvanceRound,
  actionMarkSquare,
  actionResetBoard, actionSetPlayerPoints,
  actionSwitchPlayer
} from "./gameSlice";
import {
  selectCurrentPlayerSymbol,
  selectIsFirstPlayersTurn,
  selectIsGameOver,
  selectPlayersPoints, selectWinningRow
} from "./gameSelectors";

export const thunkHandleUserMarkSquare = (square: number) => (dispatch, getState) => {
  const state = getState();
  const playerSymbol = selectCurrentPlayerSymbol(state);

  dispatch(actionMarkSquare({ square, playerSymbol }));

  // Ett bra exempel på var man måste hämta en ren version av statet
  // som vi pratade om sist, annars hade vi fått föregående rundas
  // resultat.
  selectWinningRow(getState()) && dispatch(thunkUpdatePlayerPoints());
  !selectIsGameOver(getState()) && dispatch(actionSwitchPlayer());
};

export const thunkUpdatePlayerPoints = () => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = selectIsFirstPlayersTurn(state);
  const playersPoints = selectPlayersPoints(state)
    .map((points, index) => index === +!currentPlayer
      ? points + 1
      : points
    );

  dispatch(actionSetPlayerPoints({ playersPoints }));
}

const thunkResetGame = () => (dispatch, getState) => {
  dispatch(actionResetBoard());
  dispatch(actionAdvanceRound());
}

import { updateDrinkQueue } from "../actions/actions";

const initialState = {
  baristaQueue: [],
  counterItems: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_DRINK_SUCCESS':
      const { drink } = action;
      const newBaristaQueue = [...state.baristaQueue, drink];
      return {
        ...state,
        baristaQueue: newBaristaQueue,
      };
    case 'UPDATE_DRINK_QUEUE':
      const updated = state.baristaQueue.slice(1);
      return {
        ...state,
        baristaQueue: updated,
      };
    default:
      return state;
  }
}

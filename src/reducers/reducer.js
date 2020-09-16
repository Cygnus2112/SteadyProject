const initialState = {
  baristaQueue: [],
  counterItems: [],
};

let updatedCounter;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_DRINK_SUCCESS':
      const { drink } = action;
      const newBaristaQueue = [...state.baristaQueue, drink];
      return {
        ...state,
        baristaQueue: newBaristaQueue,
      };
    case 'MAKE_DRINKS_SUCCESS':
      const finishedDrink = state.baristaQueue[0];
      const updatedQueue = state.baristaQueue.slice(1);
      updatedCounter = [...state.counterItems, finishedDrink];
      return {
        ...state,
        baristaQueue: updatedQueue,
        counterItems: updatedCounter,
      };
    case 'PICKUP_DRINK_SUCCESS':
      updatedCounter = state.counterItems.slice(1);
      return {
        ...state,
        counterItems: updatedCounter,
      };
    default:
      return state;
  }
}

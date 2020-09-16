export const CREATE_DRINK_REQUEST = 'CREATE_DRINK_REQUEST';
export const CREATE_DRINK_SUCCESS = 'CREATE_DRINK_SUCCESS';
export const UPDATE_DRINK_QUEUE = 'UPDATE_DRINK_QUEUE';

export const createDrinkRequest = (drink) => {
  return {
    type: CREATE_DRINK_REQUEST,
    drink,
  };
};

export const createDrinkSuccess = (drink) => {
  return {
    type: CREATE_DRINK_SUCCESS,
    drink,
  };
};

export const updateDrinkQueue = () => {
  return {
    type: UPDATE_DRINK_QUEUE,
  }
}

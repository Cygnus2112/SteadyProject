export const CREATE_DRINK_REQUEST = 'CREATE_DRINK_REQUEST';
export const CREATE_DRINK_SUCCESS = 'CREATE_DRINK_SUCCESS';

export const MAKE_DRINKS_REQUEST = 'MAKE_DRINKS_REQUEST';
export const MAKE_DRINKS_SUCCESS = 'MAKE_DRINKS_SUCCESS';

export const PICKUP_DRINK_REQUEST = 'PICKUP_DRINK_REQUEST';
export const PICKUP_DRINK_SUCCESS = 'PICKUP_DRINK_SUCCESS';

export const createDrinkSuccess = (drink) => {
  return {
    type: CREATE_DRINK_SUCCESS,
    drink,
  };
};

export const makeDrinksRequest = () => {
  return {
    type: MAKE_DRINKS_REQUEST,
  };
};

export const makeDrinksSuccess = () => {
  return {
    type: MAKE_DRINKS_SUCCESS,
  };
};

export const pickupDrinkRequest = () => {
  return {
    type: PICKUP_DRINK_REQUEST,
  };
};

export const pickupDrinkSuccess = () => {
  return {
    type: PICKUP_DRINK_SUCCESS,
  };
};

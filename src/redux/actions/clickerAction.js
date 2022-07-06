export const SET_INCREMENT = "CLICKER::SET_INCREMENT";
export const SET_DECREMENT = "CLICKER::SET_DECREMENT";
export const SET_RESET = "CLICKER::SET_RESET";

export const setIncriment = () => { 
  return {
    type: SET_INCREMENT

  };
};

export const setDisckriment = () => {
  return {
    type: SET_DECREMENT

  };
};

export const setReset = () => {
  return {
    type: SET_RESET
  };
};


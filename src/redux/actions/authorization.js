export const SET_EMAIL ="AUTHORIZATION::SET_EMAIL"
export const SET_PASSWORD = "AUTHORIZATION::SET_PASSWORD";


export const setEmail = (email) => {
    return {
      type: SET_EMAIL,
      payload: email,
    };
  }

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

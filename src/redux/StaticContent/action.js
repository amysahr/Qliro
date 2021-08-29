import { SET_INITIAL_DATA } from "./types";

export const setInitialData = (payload) => {
  return {
    type: SET_INITIAL_DATA,
    payload,
  };
};

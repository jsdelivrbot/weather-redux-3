import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.date, ...state]; //concat not push
  }



  return state;
}

import { formatSessionData } from '../../lib/DataFormatHelpers';

// ACTION CONSTANTS
export const LOAD_FAVES = 'LOAD_FAVES'

// ACTION CREATORS
export function loadFaves(faves) {
  return {
    type: LOAD_FAVES,
    payload: faves
  }
}

// THUNK FUNCTION
export function fetchFavesData() {
  return function(dispatch) {
    fetch()
    .then(response => response.json())
    .then(data => {
      const Data = formatSessionData(data)
      dispatch(loadFaves(Data))
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

// REDUCER
const initialState = {
  data: [],
  isLoading: true
}

export function favesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAVES:
      return {
        isloading: false,
        data: action.payload
      };
    default:
      return state
  }
}
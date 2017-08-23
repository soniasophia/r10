// ACTION CONSTANTS
export const LOAD_CONDUCT = 'LOAD_CONDUCT'

// ACTION CREATORS
export function loadConduct(conduct) {
  return {
    type: LOAD_CONDUCT,
    payload: conduct
  }
}

// THUNK FUNCTION
export function fetchConductData() {
  return function(dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
    .then(response => response.json())
    .then(data => {
      dispatch(loadConduct(data));
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

// REDUCER
const initialState = {
  data: [],
  isLoading: true
}

export function conductReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONDUCT:
      return {
        isloading: false,
        data: action.payload
      };
    default:
      return state
  }
}
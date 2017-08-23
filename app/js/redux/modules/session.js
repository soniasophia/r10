import { formatSessionData } from '../../lib/DataFormatHelpers';

// ACTION CONSTANTS
export const LOAD_SESSION = 'LOAD_SESSION'

// ACTION CREATORS
export function loadSession(session) {
  return {
    type: LOAD_SESSION,
    payload: session
  }
}

// THUNK FUNCTION
export function fetchSessionData() {
  return function(dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
    .then(response => response.json())
    .then(data => {
      const Data = formatSessionData(data)
      dispatch(loadSession(Data))
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

// REDUCER
const initialState = {
  data: [],
  isLoading: true
}

export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SESSION:
      return {
        data: action.payload,
        isLoading: false
      };
    default:
      return state
  }
}
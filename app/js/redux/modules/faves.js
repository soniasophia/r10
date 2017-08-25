import { formatSessionData } from '../../lib/DataFormatHelpers';
import { queryFave } from '../../config/models';

// ACTION CONSTANTS
export const SET_FAVES = 'SET_FAVES'
export const SET_FAVEIDS = 'SET_FAVEIDS'

// ACTION CREATORS
export function setFaves(faves) {
  return {
    type: SET_FAVES,
    payload: faves
  }
}

export function setFaveIds(faveIds) {
  return {
    type: SET_FAVEIDS,
    payload: faveIds
  }
}

// THUNK FUNCTION
export function fetchFavesData() {
  return function(dispatch) {
    const faveData = queryFave();
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
    .then(response => response.json())
    .then(data => {
      const filterFaves = data.filter(item => faveData.find(fave => fave.id === item.session_id))
      const faveIds = filterFaves.map(fave => fave.session_id)
      dispatch(setFaveIds(faveIds))
      const formattedData = formatSessionData(filterFaves)
      dispatch(setFaves(formattedData))
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

// REDUCER
const initialState = {
  faveData: [],
  faveIds: [],
  isLoading: true
}

export function favesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVES:
      return {
        ...state,
        isLoading: false,
        faveData: action.payload
      }
    case SET_FAVEIDS:
      return {
        ...state,
        isLoading: false,
        faveIds: action.payload
      }
    default:
      return state
  }
}
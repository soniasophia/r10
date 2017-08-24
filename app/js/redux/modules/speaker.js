import { formatDataObject } from '../../lib/DataFormatHelpers';

// ACTION CONSTANTS
export const LOAD_SPEAKER = 'LOAD_SPEAKER'

// ACTION CREATORS
export function loadSpeaker(speaker) {
  return {
    type: LOAD_SPEAKER,
    payload: speaker
  }
}

// THUNK FUNCTION
export function fetchSpeakerData(speakerId) {
  return function(dispatch) {
    fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
    .then(response => response.json())
    .then(data => {
      const Data = formatDataObject(data)
      dispatch(loadSpeaker(Data))
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

// REDUCER
const initialState = {
  data: {},
  isLoading: true
}

export function speakerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPEAKER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state
  }
}
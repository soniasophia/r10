// // ACTION CONSTANTS
// export const LOAD_CONDUCT = 'LOAD_CONDUCT'

// // ACTION CREATORS
// export function loadConduct(conduct) {
//   return {
//     type: LOAD_CONDUCT,
//     payload: conduct
//   }
// }

// // REDUCER
// const initialState = {
//   data: [],
//   isLoading: true
// }

// export function conductReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_CONDUCT:
//       return {
//         isloading: false,
//         data: action.payload
//       };
//     default:
//       return state
//   }
// }
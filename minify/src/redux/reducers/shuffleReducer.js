const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SHUFFLE':
      console.log(state);
      return !state;
    default:
      return state;
  }
}

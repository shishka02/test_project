const initialState = []

export default function Articles (state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [...state, action.payload]
  }
  return state
}

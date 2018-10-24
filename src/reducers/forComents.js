const initialState = []

export default function Coments (state = initialState, action) {
  if (action.type === 'ADD_Coment') {
    return [...state, action.payload]
  }
  return state
}

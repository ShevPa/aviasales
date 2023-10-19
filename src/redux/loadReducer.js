const initialState = {
  tickets: [],
}

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TICKETS':
      return {
        ...state,
        tickets: action.data.responseData.tickets,
      }
    default:
      return state
  }
}

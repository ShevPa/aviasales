const initialState = {
  tickets: [],
  numOfTicketsOnScreen: 5,
}

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ALL_TICKETS':
      const tickets = [...action.data.ticketsData]
      return {
        ...state,
        tickets,
      }
    case 'LOAD_MORE_TICKETS':
      return {
        ...state,
        numOfTicketsOnScreen: state.numOfTicketsOnScreen + 5,
      }
    default:
      return state
  }
}

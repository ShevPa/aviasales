const initialState = {
  filterName: 'theCheapest',
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKET_FILTER':
      return {
        ...state,
        filterName: action.name,
      }
    default:
      return state
  }
}

export const getTicketFilter = (name) => {
  return {
    type: 'GET_TICKET_FILTER',
    name,
  }
}
export const getTransferFilter = (name) => {
  return {
    type: 'GET_TRANSFER_FILTER',
    name,
  }
}
export const loadTickets = () => {
  return async (dispatch) => {
    const responseSearchId = await (await fetch('https://aviasales-test-api.kata.academy/search')).json()
    const responseData = await (
      await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${responseSearchId.searchId}`)
    ).json()
    dispatch({
      type: 'LOAD_TICKETS',
      data: { responseData },
    })
  }
}

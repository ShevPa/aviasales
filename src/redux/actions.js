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

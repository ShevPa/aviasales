/* eslint-disable no-await-in-loop */
import TicketService from '../service/ticket-service'

const setLoaderOn = () => {
  return {
    type: 'SET_LOADER_ON',
  }
}
const setLoaderOff = () => {
  return {
    type: 'SET_LOADER_OFF',
  }
}
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
const service = new TicketService()
export const loadTickets = () => {
  return async (dispatch) => {
    dispatch(setLoaderOn())
    const searchId = await service.getSearchId()
    const data = await service.getData(searchId)
    let { stop } = data
    const { tickets } = data
    const ticketsData = tickets
    dispatch({
      type: 'LOAD_ALL_TICKETS',
      data: { ticketsData },
    })
    while (stop === false) {
      const newTickets = await service.getData(searchId)
      ticketsData.push(...newTickets.tickets)
      stop = newTickets.stop
    }
    dispatch({
      type: 'LOAD_ALL_TICKETS',
      data: { ticketsData },
    })
    dispatch(setLoaderOff())
  }
}
export const loadMoreTickets = () => {
  return {
    type: 'LOAD_MORE_TICKETS',
  }
}

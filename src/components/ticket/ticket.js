import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { transferHelper, durationToHours, startFlightTime, endFlightTime } from '../../helpers/ticket-helper'
import { sortTickets, filterTransfers } from '../../helpers/sort-helper'

import cl from './ticket.module.scss'

function Ticket({ ticketData, numOfTickets, filter, transfers, isLoading }) {
  const filtredTickets = filterTransfers(ticketData, transfers)
  const noTicketsMessage = !isLoading ? (
    <div className={cl.message}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  ) : null
  const tickets = sortTickets(filtredTickets, filter)?.map((item) => {
    const forth = item.segments[0]
    const back = item.segments[1]
    const numberWithSpaces = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
    return (
      <div key={uuidv4()} className={cl.ticket}>
        <div className={cl.ticket__header}>
          <div className={cl.ticket__price}>{`${numberWithSpaces(item.price)} Р`}</div>
          <div className={cl.ticket__image}>
            <img src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt="logo" />
          </div>
        </div>
        <div className={cl.ticket__main}>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__content}>
              <span>{`${forth.origin} - ${forth.destination}`}</span>
              <span>{`${startFlightTime(forth.date)} - ${endFlightTime(forth.date, forth.duration)}`}</span>
            </div>
            <div className={cl.ticket__content}>
              <span>{`${back.origin} - ${back.destination}`}</span>
              <span>{`${startFlightTime(back.date)} - ${endFlightTime(back.date, back.duration)}`}</span>
            </div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__content}>
              <span>в пути</span>
              <span>{durationToHours(forth.duration)}</span>
            </div>
            <div className={cl.ticket__content}>
              <span>в пути</span>
              <span>{durationToHours(back.duration)}</span>
            </div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__content}>
              <span>{transferHelper(forth.stops)}</span>
              <span>{forth.stops.length === 0 ? '-' : `${forth.stops.join(', ')}`}</span>
            </div>
            <div className={cl.ticket__content}>
              <span>{transferHelper(back.stops)}</span>
              <span>{back.stops.length === 0 ? '-' : `${back.stops.join(', ')}`}</span>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return <div>{tickets.length === 0 ? noTicketsMessage : tickets?.slice(0, numOfTickets)}</div>
}
const mapStateToProps = (state) => {
  return {
    ticketData: state.load.tickets,
    numOfTickets: state.load.numOfTicketsOnScreen,
    filter: state.ticket.filterName,
    transfers: state.transfer.filters,
    isLoading: state.loader.isLoading,
  }
}
export default connect(mapStateToProps)(Ticket)

import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { loadTickets } from '../../redux/actions'
import { transferHelper, durationToHours, startFlightTime, endFlightTime } from '../../helpers/ticket-helper'

import cl from './ticket.module.scss'

function Ticket({ ticketData }) {
  const tickets = ticketData?.map((item) => {
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
  return <div>{tickets}</div>
}
const mapStateToProps = (state) => {
  return {
    ticketData: state.load.tickets,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: dispatch(loadTickets()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ticket)

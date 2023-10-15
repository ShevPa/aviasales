import React from 'react'

import cl from './ticket-filter.module.scss'

function TicketFilter() {
  return (
    <div className={cl.ticketFilter}>
      <ul className={cl.ticketFilter__list}>
        <li className={`${cl.ticketFilter__item} ${cl.active}`}>самый дешевый</li>
        <li className={cl.ticketFilter__item}>самый быстрый</li>
        <li className={cl.ticketFilter__item}>оптимальный</li>
      </ul>
    </div>
  )
}
export default TicketFilter

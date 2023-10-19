import React from 'react'

import Ticket from '../ticket/ticket'

import cl from './ticket-list.module.scss'

function TicketList() {
  return (
    <>
      <div>
        <Ticket />
      </div>
      <div>
        <button type="button" className={cl.button}>
          <span>показать еще 5 билетов!</span>
        </button>
      </div>
    </>
  )
}
export default TicketList

import React from 'react'

import cl from './ticket.module.scss'
import logo from './image.png'

function Ticket() {
  return (
    <div className={cl.ticket}>
      <div className={cl.ticket__header}>
        <div className={cl.ticket__price}>13 400 Р</div>
        <div className={cl.ticket__image}>
          <img src={logo} alt="S7" />
        </div>
      </div>
      <div className={cl.ticket__main}>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__content}>
            <span>mow - hkt</span>
            <span>10:45 - 08:00</span>
          </div>
          <div className={cl.ticket__content}>
            <span>mow - hkt</span>
            <span>11:20 - 00:50</span>
          </div>
        </div>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__content}>
            <span>в пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={cl.ticket__content}>
            <span>в пути</span>
            <span>13ч 30м</span>
          </div>
        </div>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__content}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
          <div className={cl.ticket__content}>
            <span>1 пересадка</span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ticket

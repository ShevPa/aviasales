import FilterTransfer from '../filter-transfer/filter-transfer'
import TicketFilter from '../ticket-filter/ticket-filter'
import TicketList from '../ticket-list/ticket-list'

import cl from './App.module.scss'
import logo from './Logo.png'

function App() {
  return (
    <div className={cl.wrapper}>
      <div className={cl.logo}>
        <img src={logo} alt="AviaSales" />
      </div>
      <div className={cl.main}>
        <FilterTransfer />
        <div className={cl.ticketWrapper}>
          <TicketFilter />
          <TicketList />
        </div>
      </div>
    </div>
  )
}

export default App

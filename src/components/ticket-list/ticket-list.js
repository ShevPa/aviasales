import React from 'react'
import { connect } from 'react-redux'

import Ticket from '../ticket/ticket'
import { loadMoreTickets, loadTickets } from '../../redux/actions'

import cl from './ticket-list.module.scss'

function TicketList({ isLoading, loadMore }) {
  const loaderMessage = <div className={cl.message}>Ещё подгружаем билеты, уже почти загрузили</div>
  return (
    <>
      <div>
        {isLoading === true ? loaderMessage : null}
        <Ticket />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            loadMore()
          }}
          className={cl.button}
        >
          <span>показать еще 5 билетов!</span>
        </button>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.loader.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: dispatch(loadTickets()),
    loadMore: () => dispatch(loadMoreTickets()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)

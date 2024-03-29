import React from 'react'
import { connect } from 'react-redux'

import { getTicketFilter } from '../../redux/actions'

import cl from './ticket-filter.module.scss'

function TicketFilter({ filterName, onFilterChange }) {
  const filters = [
    { name: 'theCheapest', label: 'самый дешевый' },
    { name: 'theFastest', label: 'самый быстрый' },
    { name: 'optimal', label: 'оптимальный' },
  ]
  const filterTabs = filters.map((item) => {
    const isActive = filterName === item.name
    return (
      <label
        key={item.name}
        className={`${cl.ticketFilter__item} ${isActive ? cl.active : ''}`}
        onClick={() => onFilterChange(item.name)}
      >
        <input type="radio" name="sorting" id={item.name} />
        {item.label}
      </label>
    )
  })
  return (
    <div className={cl.ticketFilter}>
      <div className={cl.ticketFilter__list}>{filterTabs}</div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    filterName: state.ticket.filterName,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (name) => dispatch(getTicketFilter(name)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketFilter)

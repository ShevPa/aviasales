import React from 'react'
import { connect } from 'react-redux'

import { getTransferFilter } from '../../redux/actions'

import cl from './filter-transfer.module.scss'

function FilterTransfer({ filters, onCheckChange }) {
  const checkboxes = filters.map((item) => {
    return (
      <div key={item.name} className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" name={item.name} checked={item.checked} onChange={() => onCheckChange(item.name)} />{' '}
          <span>{item.label}</span>
        </label>
      </div>
    )
  })
  return (
    <div className={cl.filter}>
      <p className={cl.filter__header}>Количество пересадок</p>
      {checkboxes}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    filters: state.transferReducer.filters,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onCheckChange: (name) => dispatch(getTransferFilter(name)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterTransfer)

import React from 'react'

import cl from './filter-transfer.module.scss'

function FilterTransfer() {
  return (
    <div className={cl.filter}>
      <p className={cl.filter__header}>Количество пересадок</p>
      <div className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" /> <span>Все</span>
        </label>
      </div>
      <div className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" /> <span>Без пересадок</span>
        </label>
      </div>
      <div className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" /> <span>1 пересадка</span>
        </label>
      </div>
      <div className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" /> <span>2 пересадки</span>
        </label>
      </div>
      <div className={cl.filter__item}>
        <label className={cl.filter__label}>
          <input type="checkbox" /> <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}
export default FilterTransfer

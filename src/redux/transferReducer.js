const initialState = {
  filters: [
    { name: 'all', label: 'Все', checked: true },
    { name: 'withoutTransfer', label: 'Без пересадок', checked: true },
    { name: 'oneTransfer', label: '1 пересадка', checked: true },
    { name: 'twoTransfer', label: '2 пересадки', checked: true },
    { name: 'threeTransfer', label: '3 пересадки', checked: true },
  ],
}
export const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRANSFER_FILTER':
      const allChecked = state.filters.every((item) => item.checked)
      let newState = state.filters.map((item) => {
        if (allChecked && action.name === 'all') {
          return { ...item, checked: false }
        }
        if (!allChecked && action.name === 'all') {
          return { ...item, checked: true }
        }
        if (allChecked && action.name !== 'all' && item.name === 'all') {
          return { ...item, checked: false }
        }
        if (item.name === action.name) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
      const exceptAllChecked = newState.slice(1).every((item) => item.checked)
      if (exceptAllChecked && !state.filters[0].checked) {
        newState = newState.map((item) => {
          if (item.name === 'all') {
            return { ...item, checked: true }
          }
          return item
        })
      }
      return {
        ...state,
        filters: newState,
      }
    default:
      return state
  }
}

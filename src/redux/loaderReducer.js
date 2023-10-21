const initialState = {
  isLoading: false,
}
export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADER_ON':
      return {
        ...state,
        isLoading: true,
      }
    case 'SET_LOADER_OFF':
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

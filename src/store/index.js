const initialState = {
  loading: false,
  error: '',
  dataCSR: []
}

export default (state = initialState, action) => {
  const { type } = action || {};

  switch(type) {
    case "LOADING":
      return {
        ...state,
        loading: action?.loading
      }
    case "ERROR":
      return {
        ...state,
        error: action?.error
      }
    case "GET_LIST_DATA":
      return {
        ...state,
        dataCSR: action?.dataCSR
      }
    default:
      return state
  }
}
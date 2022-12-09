const initialState = {
  loading: false,
  listData: []
}

export default (state = initialState, action) => {
  const { type } = action || {};

  switch(type) {
    case "LOADING":
      return {
        ...state,
        loading: action?.loading
      }
    case "GET_LIST_DATA":
      return {
        ...state,
        listData: action?.listData
      }
    default:
      return state
  }
}
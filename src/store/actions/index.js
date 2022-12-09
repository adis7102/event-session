import fetcher from "../../fetch/index.js";

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status
  }
};

export const setError = (error) => {
  return {
    type: "ERROR",
    error
  }
};

export const getListData = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true))

    fetcher(url, {
      method: "GET"
    })
    .then((data) => {
      if(data.length) {
        dispatch(setError(''))
        dispatch({
          type: "GET_LIST_DATA",
          dataCSR: data
        })
      } else {
        dispatch(setError('Data not found!'))
        setTimeout(() => {
          dispatch(setError(''))
        }, 4500)
      }
    })
    .catch((e) => {
      dispatch(setError(e.toString()))
      console.error(e)
    })
    .finally(() => dispatch(setLoading(false)))
  };
};
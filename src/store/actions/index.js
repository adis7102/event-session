import fetcher from "../../fetch/index.js";

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status,
  };
};

export const getListData = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "GET",
    })
      .then((data) => {
        dispatch({
          type: "GET_LIST_DATA",
          listData: data,
        });
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const addData = (url, body) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => {
        dispatch(getListData(url));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const editData = (url, id, body) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => {
        dispatch(getListData(url));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

import getToken from './auth'

export const addAccount = (account) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${account.user_id}/accounts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getToken()
      },
      body: JSON.stringify({ account })
    }).then((res) => {
      if (res.ok) {
        return res
          .json()
          .then((account) => {
            dispatch({ type: 'ADD_ACCOUNT', account })
          }
          );
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors);
        });
      }
    })
  };
};
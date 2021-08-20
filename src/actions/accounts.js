import getToken from './auth'

export const addAccount = (account) => {
  return (dispatch) => {
    // dispatch({ type: 'BUSY_ADDING_ACCOUNT' });
    fetch(`http://localhost:3001/users/${account.user_id}/accounts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getToken()
      },
      body: JSON.stringify({ account })
    }).then((res) => {
      if (res.ok) {
        const acnt = res
        .json()
        .then((account) =>{ 
          dispatch({ type: 'ADD_ACCOUNT', account })}
          );
          console.log(acnt)
          return acnt
      } else {
        const errors =  res.json();
        dispatch({ type: '' });
        return Promise.reject(errors);
      }
    })
  };
};
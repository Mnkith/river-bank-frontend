export const addAccount = (account) => {
  return (dispatch) => {
    dispatch({ type: 'BUSY_ADDING_ACCOUNT' });
    fetch(`http://localhost:3001/users/${account.user_id}/accounts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ account })
    })
  };
};
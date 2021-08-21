
export default function accountsReducer(state = {}, action) {
  switch (action.type) {
    case 'BUSY_ADDING_ACCOUNT':
      console.log('BUSY_ADDING_ACCOUNT')
      return state
      ;
    case 'ADD_ACCOUNT':
      console.log('inside ADD_ACCOUNT', action.account)
      return action.account
      
    default:
      return state;
  }
}
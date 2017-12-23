const initialState = {
    cdetails: null
  }
  
  const debugReducer = (state = initialState, action) => {
    if (action.type === 'CONTRACT_UPDATE')
    {
      console.log("debugReducer: CONTRACT_UPDATE, payload - ",action.payload)
      return Object.assign({}, state, {
        cdetails: action.payload
      })
    }
  
    return state
  }
  
  export default debugReducer
  
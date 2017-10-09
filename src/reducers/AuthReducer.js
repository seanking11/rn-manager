import { EMAIL_CHANGED } from '../actions/types'

const initialState = {
  email: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.email }
    default:
      return state
  }
}

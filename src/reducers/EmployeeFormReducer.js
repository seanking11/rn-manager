import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  CLEAR_EMPLOYEE_FORM
} from '../actions/types'

const initialState = {
  name: '',
  phone: '',
  shift: 'Thursday'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CLEAR_EMPLOYEE_FORM:
      return initialState
    default:
      return state
  }
}

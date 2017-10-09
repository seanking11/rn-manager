import { EMAIL_CHANGED } from './types'

export const emailChanged = email => ({
  type: EMAIL_CHANGED,
  email
})

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Colors } from '../Themes'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  close: [],
  danger: ['message'],
  success: ['message']
})

export const NotificationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  show: false,  
  message: "",
  type: "",
  icon: ""
})

/* ------------- Selectors ------------- */

export const NotificationSelectors = {
  selectAvatar: state => state.notification
}

/* ------------- Reducers ------------- */

// request the avatar for a user

export const setClose = (state, { }) =>
  state.merge({ show: false })

export const success = (state, { message }) =>
  state.merge({ show: true, icon: "check", color: Colors.GREEN_LIGHT, message })

export const danger = (state, { message }) =>
  state.merge({ show: true, icon: "exclamation-triangle", color: Colors.RED_LIGHT, message })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLOSE]: setClose,
  [Types.DANGER]: danger,
  [Types.SUCCESS]: success
})

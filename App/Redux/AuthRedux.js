import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // sagas
  login: ['data'],
  logout: [],
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  payload: null,
  isLogged: false
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  selectAvatar: state => state.auth.payload
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const isLogged = (state, { data }) =>
  state.merge({ data })

export const setUser = (state, { data }) =>
  state.merge({ payload: data, isLogged: true })

export const setLogout = (state, { data }) => {
  return INITIAL_STATE
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.UPDATE_MEMBERS]: updateMembers,
})

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setMembers: ['data'],
  addMember: ['data'],
  updateMembers: ['data'],
  
  // sagas
  getMembers: ['data'],
  save: ['data'],
  update: ['data'],
})

export const MemberTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
})

/* ------------- Selectors ------------- */

export const MemberSelectors = {
  selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const setMembers = (state, { data }) =>
  state.merge({ data })

export const addMember = (state, { data }) =>
  state.merge({ data: [...state.data, data] })

export const updateMembers = (state, { data }) => {
  data = state.data.map(d => d._id == data._id ? data : d)
  return state.merge({ data })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MEMBERS]: setMembers,
  [Types.ADD_MEMBER]: addMember,
  [Types.UPDATE_MEMBERS]: updateMembers,
})

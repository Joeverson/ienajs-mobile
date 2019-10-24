import { call, put } from 'redux-saga/effects'
import  AuthActions from '../Redux/AuthRedux'
import { NavigationActions } from 'react-navigation'
import NotificationActions from '../Redux/NotificationRedux'

import Auth from '../Helpers/Auth'

export function * login (services, action) {
  const { data } = action
  
  // make the call to the api
  const response = yield call(services.Auth.login, data)
  
  if (response.done) {
    yield call (Auth.setUser, response.data.data)
    yield call (Auth.setToken, response.data.token)
    yield put(AuthActions.setUser(response.data.data))

    yield put(NavigationActions.navigate({ routeName: "DashboardScreen" }))
  }   
}

export function * logout (services, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(services.Member.update, data)
  
  if (response.done) {
    yield call (Auth.logout)
    yield put(NavigationActions.navigate({ routeName: "NoticeListScreen" }))
  }   
}

export function * isLogged (services, action) {
  // make the call to the api
  const isLogged = yield call(Auth.isLogged)

  if(isLogged) {
    const user = yield call(Auth.getUser)
    yield put(AuthActions.setUser(user))
  }
}

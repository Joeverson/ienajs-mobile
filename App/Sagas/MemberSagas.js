import { call, put } from 'redux-saga/effects'
import NotificationActions from '../Redux/NotificationRedux'
import { path } from 'ramda'

export function * save (services, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(services.Member.save, data)

  if (response.done) {
    yield put(NotificationActions.success("Membro salvo com sucesso"))
  } else {
    yield put(NotificationActions.danger(response.data.status.message))
  }   
}

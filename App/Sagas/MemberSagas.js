import { call, put } from 'redux-saga/effects'
import NotificationActions from '../Redux/NotificationRedux'
import MemberActions from '../Redux/MemberRedux'
import { NavigationActions } from 'react-navigation'

export function * save (services, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(services.Member.save, data)

  if (response.done) {
    yield put(NotificationActions.success('Membro salvo com sucesso'))
    yield put(MemberActions.addMember(response.data.data))
    yield put(NavigationActions.navigate({ routeName: 'MemberListScreen' }))
  } else {
    yield put(NotificationActions.danger(response.data.status.message))
  }
}

export function * update (services, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(services.Member.update, data)

  if (response.done) {
    yield put(NotificationActions.success('Membro atualizado com sucesso'))
    yield put(MemberActions.updateMembers(data))
    yield put(NavigationActions.navigate({ routeName: 'MemberListScreen' }))
  } else {
    yield put(NotificationActions.danger(response.data.status.message))
  }
}

export function * list (services, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(services.Member.list)

  if (response.done) {
    yield put(MemberActions.setMembers(response.data.data))
  } else {
    yield put(NotificationActions.danger(response.data.status.message))
  }
}

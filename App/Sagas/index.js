import { takeLatest, all } from 'redux-saga/effects'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import Service from "../Services/Endpoints";

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MemberTypes } from '../Redux/MemberRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { save, list, update } from './MemberSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(MemberTypes.SAVE, save, Service),
    takeLatest(MemberTypes.UPDATE, update, Service),
    takeLatest(MemberTypes.GET_MEMBERS, list, Service)
  ])
}

import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import NavigationTab from '../Components/NavigationTab'
import Notification from '../Components/Notification'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  addLayout () {
    // informações de
    if (store.getState().nav.index == 1) {
      return <NavigationTab nav={store} />
    } else if (store.getState().nav.index == 2) {
      return (
        <NavigationTab
          menus={[
            {
              name: 'Login',
              to: 'LoginScreen',
              icon: 'lock'
            }
          ]}
          nav={store}
        />
      )
    }

    return null
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
        <Notification />
        {this.addLayout()}
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import ConsolidationListScreen from '../Containers/Consolidation/ConsolidationListScreen'
import ConsolidationAddScreen from '../Containers/Consolidation/ConsolidationAddScreen'
import FrequencyListScreen from '../Containers/Frequency/FrequencyListScreen'
import FrequencyAddScreen from '../Containers/Frequency/FrequencyAddScreen'
import MemberListScreen from '../Containers/Member/MemberListScreen'
import MemberAddScreen from '../Containers/Member/MemberAddScreen'
import MemberEditScreen from '../Containers/Member/MemberEditScreen'
import MemberDetailsScreen from '../Containers/Member/MemberDetailsScreen'
import LoginScreen from '../Containers/Auth/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AuthStack = createStackNavigator(
  {
    // dashboard
    DashboardScreen: { screen: DashboardScreen },

    // frequencia
    FrequencyAddScreen: { screen: FrequencyAddScreen },
    FrequencyListScreen: { screen: FrequencyListScreen },

    // consolidação
    ConsolidationListScreen: { screen: ConsolidationListScreen },
    ConsolidationAddScreen: { screen: ConsolidationAddScreen },

    // membros
    MemberAddScreen: { screen: MemberAddScreen },
    MemberEditScreen: { screen: MemberEditScreen },
    MemberListScreen: { screen: MemberListScreen },
    MemberDetailsScreen: { screen: MemberDetailsScreen }
  },
  {
    headerMode: 'none',
    initialRouteName: 'DashboardScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

const GuestStack = createStackNavigator(
  {
    // acionar aqui as areas que os usuarios não logados podem entrar
    LoginScreen: { screen: LoginScreen }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      LaunchScreen: createStackNavigator(
        {
          LaunchScreen: { screen: LaunchScreen }
        },
        {
          initialRouteParams: {ok: false},
          headerMode: 'none'
        }
      ),
      AuthStack,
      GuestStack
    },
    {
      initialRouteName: 'LaunchScreen'
    }
  )
)

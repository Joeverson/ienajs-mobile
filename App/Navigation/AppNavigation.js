import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import DashboardScreen from "../Containers/DashboardScreen";
import ConsolidationListScreen from "../Containers/Consolidation/ConsolidationListScreen";
import ConsolidationAddScreen from "../Containers/Consolidation/ConsolidationAddScreen";
import FrequencyListScreen from "../Containers/Frequency/FrequencyListScreen";
import MemberListScreen from "../Containers/Member/MemberListScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },

    // dashboard
    DashboardScreen: { screen: DashboardScreen },

    // frequencia
    FrequencyListScreen: { screen: FrequencyListScreen },

    // consolidação
    ConsolidationListScreen: { screen: ConsolidationListScreen },
    ConsolidationAddScreen: { screen: ConsolidationAddScreen },

    // membros
    MemberListScreen: { screen: MemberListScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "DashboardScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);

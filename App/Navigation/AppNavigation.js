import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import DashboardScreen from "../Containers/DashboardScreen";
import ConsolidationListScreen from "../Containers/Consolidation/ConsolidationListScreen";
import ConsolidationAddScreen from "../Containers/Consolidation/ConsolidationAddScreen";
import FrequencyListScreen from "../Containers/Frequency/FrequencyListScreen";
import FrequencyAddScreen from "../Containers/Frequency/FrequencyAddScreen";
import MemberListScreen from "../Containers/Member/MemberListScreen";
import MemberAddScreen from "../Containers/Member/MemberAddScreen";
import MemberEditScreen from "../Containers/Member/MemberEditScreen";
import MemberDetailsScreen from "../Containers/Member/MemberDetailsScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },

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
    MemberDetailsScreen: { screen: MemberDetailsScreen },
  },
  {
    headerMode: "none",
    initialRouteName: "MemberListScreen",
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
);

export default createAppContainer(PrimaryNav);

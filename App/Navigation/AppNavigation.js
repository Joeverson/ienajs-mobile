import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import DashboardScreen from "../Containers/DashboardScreen";
import ConsolidationListScreen from "../Containers/Consolidation/ConsolidationListScreen";
import FrequencyListScreen from "../Containers/Frequency/FrequencyListScreen";
import MemberListScreen from "../Containers/Member/MemberListScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    DashboardScreen: { screen: DashboardScreen },
    FrequencyListScreen: { screen: FrequencyListScreen },
    ConsolidationListScreen: { screen: ConsolidationListScreen },
    MemberListScreen: { screen: MemberListScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "MemberListScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);

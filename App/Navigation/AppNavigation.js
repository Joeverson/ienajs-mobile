import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import DashboardScreen from "../Containers/DashboardScreen";
import ConsolidationListScreen from "../Containers/Consolidation/ConsolidationListScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    DashboardScreen: { screen: DashboardScreen },
    ConsolidationListScreen: { screen: ConsolidationListScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "ConsolidationListScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);

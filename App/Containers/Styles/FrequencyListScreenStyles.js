import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import colors from "../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  background: {
    backgroundColor: colors.BLUE
  },
  logo: {
    width: 200,
    height: 200
  }
});

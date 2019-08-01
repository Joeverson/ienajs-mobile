import React from "react";
import Styles from "./NavigationTab.styles";
import { View, Text } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";

class NavigationTab extends React.Component {
  state = {
    menus: [
      {
        name: "Notícias",
        link: "",
        icon: "newspaper"
      },
      {
        name: "Membros",
        link: "",
        icon: "users"
      },
      {
        name: "Dashboard",
        link: "",
        icon: "tachometer-alt"
      }
    ]
  };

  componentDidMount = () => {
    console.log("NavigationTab mounted");
  };

  render() {
    return (
      <View style={Styles.shadow} styleName={this.props.styleName}>
        <View styleName="horizontal space-between">
          {this.state.menus.map((data, it) => (
            <View styleName="vertical h-center" key={it}>
              <Icon name={data.icon} />
              <Text>{data.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default NavigationTab;

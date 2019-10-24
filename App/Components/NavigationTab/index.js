import React from "react";
import Styles from "./NavigationTab.styles";
import { View, Text, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  NavigationActions
} from 'react-navigation'

class NavigationTab extends React.Component {
  state = {
    menus: this.props.menus || [
      {
        name: "Notícias",
        to: "",
        icon: "newspaper"
      },
      {
        name: "Membros",
        to: "MemberListScreen",
        icon: "users"
      },
      {
        name: "Dashboard",
        to: "DashboardScreen",
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
            <TouchableOpacity onPress={() => this.props.nav.dispatch(NavigationActions.navigate({
                routeName: data.to
              }))} key={it}>
              <View styleName="vertical h-center">
                <Icon name={data.icon} />
                <Text>{data.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default NavigationTab;

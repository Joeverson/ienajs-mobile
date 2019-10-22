import React, { PureComponent } from "react";
import { ToastAndroid } from 'react-native'
import { View, Row, Text, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";

import Styles from "./ActionButton.styles";

export default class extends PureComponent {
  state = {
    indicators: this.props.data
  };

  render() {
    return (
      <View styleName={this.props.styleName}>
        {this.state.indicators.map((map, it) => (
          <TouchableOpacity onPress={() => map.isUnvaliable ? this.props.navigation.navigate(map.to) : ToastAndroid.show("Área em desenvolvimento", ToastAndroid.SHORT)} key={it}>
            <Row styleName="small">
              <Icon style={Styles.iconSide} name={map.icon} />
              <Text>{map.name}</Text>
              <Icon styleName="disclosure" name="chevron-right" />
            </Row>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

import React, { PureComponent } from "react";
import Styles from "./ActionButton.styles";
import { View, Row, Text, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class extends PureComponent {
  state = {
    indicators: this.props.data
  };

  render() {
    return (
      <View styleName={this.props.styleName}>
        {this.state.indicators.map((map, it) => (
          <TouchableOpacity onPress={this.props.onPress} key={it}>
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

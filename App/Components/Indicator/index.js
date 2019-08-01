import React, { PureComponent } from "react";
import Styles from "./Indicator.styles";
import { View, Row, Text, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";

class Indicator extends PureComponent {
  state = {
    indicators: this.props.data
  };

  render() {
    return (
      <View
        style={this.props.style}
        styleName={this.props.styleName}
      >
        <View>
          {this.state.indicators.map((map, it) => (
            <TouchableOpacity key={it} onPress={this.props.onPress}>
              <Row styleName="small" style={{ margin: 10, borderRadius: 16 }}>
                <Text>{map.name}</Text>
                <Icon styleName="disclosure" name="chevron-right" />
              </Row>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default Indicator;

import React, { PureComponent } from "react";
import { View, Row, Heading, TextInput, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../Themes";
// import { Test } from './Search.styles';

class Input extends PureComponent {
  render() {
    return (
      <Row
        styleName="small"
        style={{
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          borderBottomColor: Colors.BLUE,
          borderBottomWidth: 1,
        }}>
        <Icon style={{ color: Colors.BLUE }} size={16} name={this.props.icon} />
        <TextInput
          style={{
            flex: 2,
            backgroundColor: Colors.WHITE,
          }}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChange}
        />
      </Row>
    );
  }
}

export default Input;

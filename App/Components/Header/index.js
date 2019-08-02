import React, { PureComponent } from 'react';
import { View, Row, Heading, TouchableOpacity } from '@shoutem/ui';
import Icon from "react-native-vector-icons/FontAwesome5";
//import { Test } from './Header.styles';

class Header extends PureComponent { 
  state = {
    hasError: false,
  };

  render () {
    return (
      <View>
        <Row>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ padding: 10 }}>
            <Icon size={18} name="arrow-left" />
          </TouchableOpacity>
        </Row>
        <Row>
          <Heading>Consolidações</Heading>
        </Row>
      </View>
    )
  }
}

export default Header;

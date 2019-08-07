import React, { PureComponent } from 'react';
import { View, Row, Heading, TouchableOpacity } from '@shoutem/ui';
import Icon from "react-native-vector-icons/FontAwesome5";
//import { Test } from './Header.styles';

class Header extends PureComponent { 
  state = {
    hasError: false,
  };

  render () {
    const title = this.props.title.split(' ')
    const firstName = title.shift()
    const lastName = title.join(' ')

    return (
      <View>
        <View style={{ marginTop: 10, marginBottom: 10, }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ padding: 10 }}>
            <Icon size={18} name="arrow-left" />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 5, }}>
          <Heading>{firstName}</Heading>
          <Heading>{lastName}</Heading>
        </View>
      </View>
    )
  }
}

export default Header;

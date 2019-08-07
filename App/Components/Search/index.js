import React, { PureComponent } from 'react'
import { View, Row, Heading, TextInput, TouchableOpacity } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../Themes';
// import { Test } from './Search.styles';

class Header extends PureComponent {
  state = {
    hasError: false
  }

  render () {
    return (
      <Row styleName='small'>
        < View styleName = 'horizontal'
        style = {
          {
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 10,
          }
        } >
          <TextInput
            style={{
              flex: 2,
              backgroundColor: Colors.GRAY_LIGHT,
            }}
            placeholder={this.props.placeholder}
            onChangeText={() => {}}
          />
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{ padding: 20 }}>
            <Icon size={18} styleName='disclosure' name='search' />
          </TouchableOpacity>
        </View>
      </Row>
    )
  }
}

export default Header

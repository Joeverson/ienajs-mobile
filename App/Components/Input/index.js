import React, { PureComponent } from 'react'
import { View, Row, Heading, TextInput, TouchableOpacity } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../Themes'
// import { Test } from './Search.styles';

class Input extends PureComponent {
  state = {
    validation: false
  }

  render () {
    return (
      <Row
        styleName='small'
        style={{
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          borderBottomColor: this.state.validation ? Colors.error : Colors.BLUE,
          borderBottomWidth: 1
        }}>
        <Icon
          style={{ color: this.state.validation ? Colors.error : Colors.BLUE }}
          size={16}
          name={this.props.icon}
        />
        <TextInput
          style={{
            flex: 2,
            backgroundColor: Colors.WHITE
          }}
          onBlur={() => {
            if (this.props.validation) {
              this.setState({
                validation: this.props.validation()
              })
            }
          }}
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          onChangeText={text => {
            this.props.onChange(text)
            if (this.props.validation) {
              this.setState({
                validation: this.props.validation()
              })
            }
          }}
        />
      </Row>
    )
  }
}

export default Input

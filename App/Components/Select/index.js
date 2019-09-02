import React, { PureComponent } from 'react';
import { Picker } from 'react-native'
import { View, Row, Heading, TouchableOpacity } from '@shoutem/ui';
import { Colors } from '../../Themes';

//import { Test } from './Header.styles';

class Select extends PureComponent { 
  state = {
    hasError: false,
  };

  render () {
    return (
      <Picker
        selectedValue={this.props.data[0]}
        style={{height: 50, borderColor: Colors.BLUE, borderWidth: 1, ...this.props.style }}
        onValueChange={(itemValue, itemIndex) =>
          this.props.selected(itemValue)
        }>
        {
          this.props.data.map(d => <Picker.Item label={d} value={d} />)
        }
      </Picker>
    )
  }
}

export default Select;

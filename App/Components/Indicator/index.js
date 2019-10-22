import React from 'react'
import { ToastAndroid } from 'react-native'
import Styles from './Indicator.styles'
import { View, Row, Text, TouchableOpacity } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Indicator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      indicators: this.props.data
    }
  }

  render () {
    return (
      <View
        style={{ ...this.props.style, ...Styles.background }}
        styleName={this.props.styleName}>
        <View styleName='space-between'>
          {this.state.indicators.map((map, it) => (
            <TouchableOpacity
              key={it}
              onPress={() =>
                map.isUnvaliable
                  ? this.props.navigation.navigate(map.to)
                  : ToastAndroid.show(
                    'Área em desenvolvimento',
                    ToastAndroid.SHORT
                  )
              }>
              <Row styleName='small' style={{ margin: 10, borderRadius: 16 }}>
                <Text>{map.name}</Text>
                <Icon styleName='disclosure' name='chevron-right' />
              </Row>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

export default Indicator

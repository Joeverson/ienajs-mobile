import React, { Component } from 'react'
import {
  View,
  Subtitle,
  ListView,
  Caption,
  Divider,
  Text,
  Row,
  Switch
} from '@shoutem/ui'
import Styles from '../Styles/FrequencyListScreenStyles'
import Icon from "react-native-vector-icons/FontAwesome5";

// components
import Header from '../../Components/Header'
import { Colors } from '../../Themes';

export default class extends Component {
  state = {
    frequencys: [
      {
        date: '10/09/2019',
        checked: false,
      },
      {
        date: '17/09/2019',
        checked: true,
      }
    ]
  }

  renderRow(data) {
    return (
      <Row>
        <Text>{data.date}</Text>
        <Switch
          onValueChange={value => {}}
          value={data.checked}
        />
      </Row>
    )
  }

  consolidacoesView() {
   return (
      <View style={{ borderRadius: 5, marginTop: 15, padding: 8, backgroundColor: Colors.GRAY_LIGHT, }}>
        <Subtitle>Consolidações</Subtitle>
        <View styleName = "horizontal space-between" >
          <View>
            <Caption>
              <Icon styleName="disclosure" name="check"/>
              Sophia
            </Caption>
            <Caption>
              <Icon styleName="disclosure" name="times"/>
              Sophia
            </Caption>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
          </View>
          <View>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
          </View>
          <View>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
            <Caption>Sophia</Caption>
          </View>
        </View>
      </View>)
  }

  render () {
    return (
      <View style={{...Styles.mainContainer }} styleName='vertical'>
        <View style={{ evoluation: 2 }}>
          <Header title="Member name completo" {...this.props} />
          <Caption>rua juventina ricardina dos santos, 109</Caption>
          <Divider styleName="line" style={{ marginBottom: 10}}/>
          <View styleName='horizontal space-between'>
            <Text>(00) 00000-0000</Text>
            <Text>08/02/1996</Text>
          </View>
        </View>
        { this.consolidacoesView() }
        <Divider styleName="line" style={{ marginBottom: 10}}/>
        <Subtitle styleName='bold'>Frequencia</Subtitle>
        <ListView data={this.state.frequencys} renderRow={this.renderRow} />
      </View>
    )
  }
}

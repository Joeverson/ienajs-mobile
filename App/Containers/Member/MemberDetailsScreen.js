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
import moment from 'moment'
import Styles from '../Styles/FrequencyListScreenStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../Themes'

// components
import Header from '../../Components/Header'

export default class extends Component {
  state = {
    user: this.props.navigation.state.params.data,
    frequencys: [
      {
        date: '10/09/2019',
        checked: false
      },
      {
        date: '17/09/2019',
        checked: true
      }
    ]
  }

  renderRow (data) {
    return (
      <Row>
        <Text>{data.date}</Text>
        <Switch onValueChange={value => {}} value={data.checked} />
      </Row>
    )
  }

  consolidacoesView () {
    return (
      <View
        style={{
          borderRadius: 5,
          marginTop: 15,
          padding: 8,
          backgroundColor: Colors.GRAY_LIGHT
        }}>
        <Subtitle>Consolidações</Subtitle>
        <View styleName='horizontal space-between'>
          <View>
            <Caption>
              <Icon styleName='disclosure' name='check' />
              Sophia
            </Caption>
            <Caption>
              <Icon styleName='disclosure' name='times' />
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
      </View>
    )
  }

  render () {
    const { user } = this.state

    return (
      <View style={{ ...Styles.mainContainer }} styleName='vertical'>
        <View style={{ evoluation: 2 }}>
          <Header title={user.name} rightIcon='edit' rightIconPress={() => this.props.navigation.navigate("MemberEditScreen", { data: user })} {...this.props} />
          <Caption>{user.address}</Caption>
          <Divider styleName='line' style={{ marginBottom: 10 }} />
          <View styleName='horizontal space-between'>
            <Text>{user.phone}</Text>
            <Text>{moment(user.birthday).format('DD/MM/YYYY')}</Text>
          </View>
        </View>
        {this.consolidacoesView()}
        <Divider styleName='line' style={{ marginBottom: 10 }} />
        <Subtitle styleName='bold'>Frequencia</Subtitle>
        <ListView data={this.state.frequencys} renderRow={this.renderRow} />
      </View>
    )
  }
}

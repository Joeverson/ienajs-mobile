import React, { Component } from 'react'
import {
  View,
  Row
} from '@shoutem/ui'
import Styles from '../Styles/ConsolidationListScreenStyles'

// components
import Header from '../../Components/Header'
import Select from '../../Components/Select';

export default class extends Component {
  state = {}

  render () {
    return (
      <View style={{...Styles.mainContainer }} styleName='vertical space-between'>
        <View style={{ evoluation: 2 }}>          
          <Header title="Adicionar Consolidações" {...this.props} />
        </View>
        <Row styleName="vertical">
          <Select label='Celula' style={{ width: '100%' }} data={['casad', 'vc']} />
        </Row>
        <Row styleName="vertical">
          <Select label='Consolidações' style={{ width: '100%' }} data={['casad', 'vc']} />
        </Row>
        <View style={{ flex:2 }}>
          
        </View>
      </View>
    )
  }
}

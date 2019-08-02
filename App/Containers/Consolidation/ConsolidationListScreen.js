import React, { Component } from 'react'
import {
  View,
  Subtitle,
  ListView,
  Caption,
  Divider
} from '@shoutem/ui'
import Styles from '../Styles/ConsolidationListScreenStyles'

// components
import Header from '../../Components/Header'
import Search from '../../Components/Search'

export default class extends Component {
  state = {
    consolidations: [
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      },
      {
        name: 'asdasd',
        endereco: 'asdasdasd',
        consolidations: []
      }
    ]
  }

  renderRow = data => {
    return (
      <View style={{ marginLeft: 16, marginRight: 16, paddingTop: 10,}}>
        <Divider />
        <Subtitle>Nome das coisas</Subtitle>
        <Caption>asda asdasd</Caption>
        <Caption>(00) 00000-0000</Caption>
      
        <View styleName = "horizontal space-between" >
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
    return (
      <View style={{...Styles.mainContainer }} styleName='vertical space-between'>
        <View style={{ evoluation: 2 }}>
          <Header {...this.props} />
          <Search />
        </View>
        <ListView data={this.state.consolidations} renderRow={this.renderRow} />
      </View>
    )
  }
}

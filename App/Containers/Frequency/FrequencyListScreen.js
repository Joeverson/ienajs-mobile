import React, { Component } from 'react'
import {
  View,
  Subtitle,
  ListView,
  Caption,
  Divider
} from '@shoutem/ui'
import Styles from '../Styles/FrequencyListScreenStyles'

// components
import Header from '../../Components/Header'
import Search from '../../Components/Search'

export default class extends Component {
  state = {
    frequencys: [
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
        <Caption>Celula: asda asdasd</Caption>
      
        <View styleName = "horizontal space-between" style={{marginTop: 10}}>
          <View>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
          </View>
          <View>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
          </View>
          <View>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
            <Caption>10/08/2019</Caption>
          </View>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={{...Styles.mainContainer }} styleName='vertical space-between'>
        <View style={{ evoluation: 2 }}>
          <Header title="Frequência" {...this.props} />
          <Search placeholder='Pesquisar membro'/>
        </View>
        <ListView data={this.state.frequencys} renderRow={this.renderRow} />
      </View>
    )
  }
}

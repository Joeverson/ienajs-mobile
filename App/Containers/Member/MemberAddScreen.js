import React, { Component } from 'react'
import {
  View,
  Subtitle,
} from '@shoutem/ui'
import Styles from '../Styles/FrequencyListScreenStyles'


// components
import Header from '../../Components/Header'
import { Colors } from '../../Themes';
import Input from '../../Components/Input';
import Datepicker from '../../Components/Datepicker';
import RoundedButton from '../../Components/RoundedButton';

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

  render () {
    return (
      <View styleName="space-between">
        <View style={{ evoluation: 2 }}>
          <Header title="Registrar Novo Membro" {...this.props} />
        </View>
        {/* <Subtitle styleName="bold">Info. Gerais</Subtitle> */}
        <View>
          <Input icon="user" placeholder="Nome" />
          <Input icon="map-marker-alt" placeholder="Endereço" />
          <Input icon="phone-square" placeholder="Telefone" />
          <Datepicker />
        </View>
        <View styleName="horizontal h-end">
          <RoundedButton />
        </View>
      </View>
    );
  }
}

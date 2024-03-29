import React, { Component } from 'react'
import { View } from '@shoutem/ui'
import moment from 'moment'
import { MemberTypes } from '../../Redux/MemberRedux'
import { connect } from 'react-redux'
import Mask from '../../Helpers/Mask'

import Styles from '../Styles/FrequencyListScreenStyles'
import { Colors } from '../../Themes'

// components
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import Datepicker from '../../Components/Datepicker'
import RoundedButton from '../../Components/RoundedButton'

class MemberAddScreen extends Component {
  state = {
    form: {
      phone: '',
      address: '',
      name: ''
    }
  }

  save = () => {
    const { form } = this.state
    // todo create the validation data input
    // save the api
    form.birthday = moment(form.date).format('YYYY-MM-DD')
    this.props.save(form)
  }

  handlerText = data => {
    this.setState({
      form: { ...this.state.form, [data.name]: data.text }
    })
  }

  render () {
    return (
      <View styleName='space-between'>
        <View style={{ evoluation: 2 }}>
          <Header title='Registrar Novo Membro' {...this.props} />
        </View>

        <View>
          <Input
            onChange={text => this.handlerText({ text, name: 'name' })}
            icon='user'
            placeholder='Nome'
          />
          <Input
            onChange={text => this.handlerText({ text, name: 'address' })}
            icon='map-marker-alt'
            placeholder='Endereço'
          />
          <Input
            defaultValue={this.state.form.phone}
            onChange={text =>
              this.handlerText({ text: Mask.tel(text), name: 'phone' })
            }
            icon='phone-square'
            placeholder='Telefone'
            validation={() => this.state.phone === ''}
          />
          <Datepicker
            onChange={date =>
              this.setState({
                form: { ...this.state.form, birthday: date }
              })
            }
          />
        </View>
        <View styleName='horizontal h-end'>
          <RoundedButton onPress={this.save} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapStateToDispatchProps = dispatch => ({
  save: data =>
    dispatch({
      type: MemberTypes.SAVE,
      data
    })
})

export default connect(
  mapStateToProps,
  mapStateToDispatchProps
)(MemberAddScreen)

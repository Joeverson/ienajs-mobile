import React, { Component } from 'react'
import { View, Button, Image, Text } from '@shoutem/ui'
import { AuthTypes } from '../../Redux/AuthRedux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Styles from '../Styles/FrequencyListScreenStyles'
import { Colors, Images } from '../../Themes'

// components
import Input from '../../Components/Input'

class LoginScreen extends Component {
  state = {
    form: {
      email: '',
      pass: '',
    }
  }

  login = () => {
    const { form } = this.state
    this.props.login(form)
  }

  handlerText = data => {
    this.setState({
      form: { ...this.state.form, [data.name]: data.text }
    })
  }

  render () {
    return (
      <View styleName='space-between' style={{ ...Styles.container, marginTop: "40%"}}>
        <View styleName='vertical v-center h-center'>
          <Image source={Images.logo} style={Styles.logo} />
          <Input
            onChange={text => this.handlerText({ text, name: 'email' })}
            icon='envelope-open'
            placeholder='Email'
          />
          <Input
            onChange={text => this.handlerText({ text, name: 'password' })}
            icon='lock'
            password
            placeholder='Senha'
          />
          <Button onPress={this.login} style={{ backgroundColor: Colors.BLUE_LIGHT, padding: 30}}>
            <Text>Entrar</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapStateToDispatchProps = dispatch => ({
  login: data =>
    dispatch({
      type: AuthTypes.LOGIN,
      data
    })
})

export default connect(
  mapStateToProps,
  mapStateToDispatchProps
)(LoginScreen)

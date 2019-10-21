import React, { Component } from 'react'
import {
  View,
} from '@shoutem/ui'
import moment from 'moment'
import Styles from '../Styles/FrequencyListScreenStyles'


// components
import Header from '../../Components/Header'
import { Colors } from '../../Themes';
import Input from '../../Components/Input';
import Datepicker from '../../Components/Datepicker';
import RoundedButton from '../../Components/RoundedButton';
import { connect } from "react-redux";
import { MemberTypes } from '../../Redux/MemberRedux';


class MemberAddScreen extends Component {
  state = {
    form: undefined
  }

  save = () => {
    const { form } = this.state
    // todo create the validation data input
    // save the api
    form.birthday = moment(form.date).format('YYYY-MM-DD')
    this.props.save(form);
  }

  handlerText = data => {
    this.setState({
      form: {...this.state.form, [data.name]: data.text}
    })
  }

  render () {
    return (
      <View styleName="space-between">
        <View style={{ evoluation: 2 }}>
          <Header title="Registrar Novo Membro" {...this.props} />
        </View>

        <View>
          <Input
            onChange={text => this.handlerText({ text, name: "name" })}
            icon="user"
            placeholder="Nome"
          />
          <Input
            onChange={text => this.handlerText({ text, name: "address" })}
            icon="map-marker-alt"
            placeholder="Endereço"
          />
          <Input
            onChange={text => this.handlerText({ text, name: "phone" })}
            icon="phone-square"
            placeholder="Telefone"
          />
          <Datepicker
            onChange={date =>
              this.setState({
                form: { ...this.state.form, birthday: date },
              })
            }
          />
        </View>
        <View styleName="horizontal h-end">
          <RoundedButton onPress={this.save} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapStateToDispatchProps = dispatch => ({
  save: data => dispatch({
    type: MemberTypes.SAVE,
    data
  }) 
});

export default connect(
  mapStateToProps,
  mapStateToDispatchProps
)(MemberAddScreen);
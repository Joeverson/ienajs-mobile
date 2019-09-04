import React, { Component } from "react";
import { View, Row, Text, ListView, Subtitle, Switch } from "@shoutem/ui";
import Styles from "../Styles/ConsolidationListScreenStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

// components
import Header from "../../Components/Header";
import Select from "../../Components/Select";
import RoundedButton from "../../Components/RoundedButton";
import Datepicker from "../../Components/Datepicker";

export default class extends Component {
  state = {
    date:"",
    members: [
      {
        name: 'cassda'
      },
      {
        name: 'cassda'
      },
      {
        name: 'cassda'
      },
      {
        name: 'cassda'
      },
      {
        name: 'cassda'
      },
      {
        name: 'cassda'
      }
    ]
  };

  render() {
    return (
      <View
        style={{ ...Styles.mainContainer }}
        styleName="vertical space-between">
        <View style={{ evoluation: 2 }}>
          <Header title="Registrar Presença na Célula" {...this.props} />
        </View>
        <Subtitle>Nome da celula</Subtitle>
        <Datepicker onChange={date => this.setState({ date })} />
        <ListView
          data={this.state.members}
          renderRow={m => (
            <Row styleName="small">
              <Icon name="user" />
              <Text>{m.name}</Text>
              <Switch
                onValueChange={value => {}}
                value={false}
              />
            </Row>
          )}
        />
        <View styleName="horizontal h-end">
          <RoundedButton label="asd" />
        </View>
      </View>
    );
  }
}

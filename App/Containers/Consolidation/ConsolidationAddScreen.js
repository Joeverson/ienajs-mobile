import React, { Component } from "react";
import { View, Row, Text, Button } from "@shoutem/ui";
import Styles from "../Styles/ConsolidationListScreenStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

// components
import Header from "../../Components/Header";
import Select from "../../Components/Select";
import RoundedButton from "../../Components/RoundedButton";

export default class extends Component {
  state = { };

  render() {
    return (
      <View
        style={{ ...Styles.mainContainer }}
        styleName="vertical space-between">
        <View style={{ evoluation: 2 }}>
          <Header title="Registrar Consolidação" {...this.props} />
        </View>
        <View>
          <Row styleName="vertical">
            <Select
              label="Celula"
              style={{ width: "100%" }}
              data={["casad", "vc"]}
            />
          </Row>
          <Row styleName="vertical">
            <Select
              label="Consolidações"
              style={{ width: "100%" }}
              data={["casad", "vc"]}
            />
          </Row>
          <Row styleName="vertical">
            <Select
              label="Consolidações"
              style={{ width: "100%" }}
              data={["casad", "vc"]}
            />
          </Row>
        </View>
        <View styleName="horizontal h-end">
          <RoundedButton label="asd" />
        </View>
      </View>
    );
  }
}

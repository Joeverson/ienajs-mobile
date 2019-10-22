import React, { Component } from "react";
import { View, Title } from "@shoutem/ui";
import Styles from "./Styles/DashboardScreenStyles";
// components
import NavigationTab from "../Components/NavigationTab";
import Indicator from "../Components/Indicator";
import ActionsButton from "../Components/ActionsButton";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      indicators: [
        {
          name: "Consolidação",
          porcent: 30,
          to: "ConsolidationListScreen",
          isUnvaliable: false
        },
        {
          name: "frequencia",
          porcent: 30,
          to: "",
          isUnvaliable: false
        },
      ],
      actions: [
        {
          name: "Adicionar Consolidação",
          to: "ConsolidationAddScreen",
          icon: "book",
          isUnvaliable: false
        },
        {
          name: "Adicionar Presença",
          to: "FrequencyAddScreen",
          icon: "hand-paper",
          isUnvaliable: false
        },
        {
          name: "Adicionar Membro",
          to: "MemberAddScreen",
          icon: "grin-beam",
          isUnvaliable: true
        },
        {
          name: "Adicionar Noticias",
          to: "",
          icon: "pen-alt",
          isUnvaliable: false
        },
      ],
    };
  }

  render() {
    return (
      <View style={ Styles.mainContainer } styleName="vertical space-between">
        <Indicator {...this.props} style={{ flex: 2 }} data={this.state.indicators} />

        <ActionsButton {
          ...this.props
        }
        data = {
          this.state.actions
        }
        />
      </View>
    );
  }
}

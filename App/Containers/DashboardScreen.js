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
      indicators: [{
          name: "Consolidação",
          porcent: 30,
          to: "ConsolidationListScreen"
        },
        {
          name: "frequencia",
          porcent: 30,
          to: ""
        }
      ],
      actions: [{
          name: "Adicionar Consolidação",
          to: "ConsolidationAddScreen",
          icon: "book"
        },
        {
          name: "Adicionar Presença",
          to: "",
          icon: "hand-paper"
        },
        {
          name: "Adicioanr Membro",
          to: "",
          icon: "grin-beam"
        },
        {
          name: "Adicioanr Noticias",
          to: "",
          icon: "pen-alt"
        }
      ]
    };
  }

  render() {
    return (
      <View style={ Styles.mainContainer } styleName="vertical space-between">
        <Indicator {...this.props} style={{ flex: 2 }} data={this.state.indicators} />

        < ActionsButton {
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

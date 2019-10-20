import React, { Component } from "react";
import { TouchableOpacity } from "react-native"
import { View, Subtitle, ListView, Caption, Divider, Text } from "@shoutem/ui";
import Styles from "../Styles/ConsolidationListScreenStyles";
import EmptyData from "../../Components/EmptyData";

// components
import Header from "../../Components/Header";
// import Search from "../../Components/Search";

export default class extends Component {
  state = {
    members: [
      {
        id: "12",
        name: "asda",
        endereco: "asdassad",
        phone: "(00) 00000-0000",
        consolidacao: [],
      },
      {
        id: "123",
        name: "Joerverson",
        endereco: "R. juventina ricardina dos santos",
        phone: "(00) 00000-0000",
        consolidacao: [],
      },
    ],
  };

  renderRow = data => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("MemberDetailsScreen", { id: data.id })}>
        <View style={{ marginLeft: 16, marginRight: 16, paddingTop: 10 }}>
          <Divider />
          <Subtitle>{data.name}</Subtitle>
          <Caption>{data.endereco}</Caption>
          <Caption>{data.phone}</Caption>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View
        style={{ ...Styles.mainContainer }}
        styleName="vertical space-between">
        <View style={{ evoluation: 2 }}>
          <Header
            search
            searchBy="name"
            searchData={this.state.members}
            searchFiltered={members => this.setState({ members })}
            title="Membros"
            {...this.props}
          />
        </View>
        <EmptyData visible={this.state.members.length === 0} />
        <ListView data={this.state.members} renderRow={this.renderRow} />
      </View>
    );
  }
}

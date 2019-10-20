import React, { PureComponent } from "react";
import { View, Row, Heading, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../Themes";
import Search from "../../Components/Search";

//import { Test } from './Header.styles';

class Header extends PureComponent {
  state = {
    search: "",
    searchBy: "name",
    dataOrigin: [],
    dataFiltered: [],
    hasError: false,
  };

  componentDidMount() {
    this.setState({
      dataOrigin: this.props.searchData,
      dataFiltered: this.props.searchData,
      searchBy: this.props.searchBy
    })
  }

  _search = () => {
    if (this.props.search) {
      return <Search onChangeText={text => {
        this.props.searchFiltered(this.state.dataOrigin.filter(d =>
          d[this.state.searchBy]
            .trim()
            .toLowerCase()
            .match(text.toLowerCase())
        ));
      }} />;
    }
  };

  render() {
    const title = this.props.title.split(" ");
    const firstName = title.shift();
    const lastName = title.join(" ");

    return (
      <View
        style={{
          backgroundColor: Colors.BLUE,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 5,
          elevation: 1,
        }}>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{ padding: 10 }}>
            <Icon size={18} color="white" name="arrow-left" />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 5, justifyContent: "center" }}>
          <Heading style={{ color: "white" }}>{firstName}</Heading>
          <Heading style={{ color: "white" }}>{lastName}</Heading>
        </View>
        {this._search()}
      </View>
    );
  }
}

export default Header;

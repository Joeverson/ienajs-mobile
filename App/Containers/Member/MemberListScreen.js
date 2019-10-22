import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Subtitle, ListView, Caption, Divider, Text } from '@shoutem/ui'
import Styles from '../Styles/ConsolidationListScreenStyles'
import EmptyData from '../../Components/EmptyData'
import { connect } from 'react-redux'

// components
import Header from '../../Components/Header'
import { MemberTypes } from '../../Redux/MemberRedux'
// import Search from "../../Components/Search";

class MemberListScreen extends Component {
  state = {
    members: []
  }

  componentDidMount () {
    this.props.list()
    this.setState({ members: this.props.members })
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      ...prevState,
      ...nextProps
    }
  }

  renderRow = data => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('MemberDetailsScreen', { data })
        }>
        <View style={{ marginLeft: 16, marginRight: 16, paddingTop: 10 }}>
          <Divider />
          <Subtitle>{data.name}</Subtitle>
          <Caption>{data.address}</Caption>
          <Caption>{data.phone}</Caption>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View
        style={{ ...Styles.mainContainer }}
        styleName='vertical space-between'>
        <View style={{ evoluation: 2 }}>
          <Header
            search
            searchBy='name'
            searchData={this.state.members}
            searchFiltered={members => this.setState({ members })}
            title='Membros'
            {...this.props}
          />
        </View>
        <EmptyData visible={this.state.members.length === 0} />
        <ListView data={this.state.members} renderRow={this.renderRow} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    members: state.members.data
  }
}

const mapStateToDispatchProps = dispatch => ({
  list: () =>
    dispatch({
      type: MemberTypes.GET_MEMBERS
    })
})

export default connect(
  mapStateToProps,
  mapStateToDispatchProps
)(MemberListScreen)

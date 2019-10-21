import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Row, View, Text } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../Themes'
import { connect } from 'react-redux'
import { NotificationTypes } from '../../Redux/NotificationRedux'

// import { Test } from './Notification.styles';

class Notification extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  render () {
    if (this.props.notification.show) {
      setTimeout(() => {
        this.props.close()
      }, 5000)
    }

    if (this.props.notification.show) {
      return (
        <View>
          <Row
            styleName='small'
            style={{
              elevation: 2,
              backgroundColor: this.props.notification.color
            }}>
            <Icon
              name={this.props.notification.icon}
              size={20}
              style={{ marginRight: 10, color: Colors.WHITE }}
            />
            <Text style={{ color: Colors.WHITE }}>
              {this.props.notification.message}
            </Text>
          </Row>
        </View>
      )
    }

    return null
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string
}

Notification.defaultProps = {
  message: 'test',
  icon: 'exclamation-triangle'
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

const mapStateToDispatchProps = dispatch => ({
  close: () =>
    dispatch({
      type: NotificationTypes.CLOSE
    })
})

export default connect(
  mapStateToProps,
  mapStateToDispatchProps
)(Notification)

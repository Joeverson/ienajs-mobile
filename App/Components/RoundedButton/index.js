import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import style from './RoundedButton.styles';
import { View, Text, TouchableOpacity } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";

class RoundedButton extends PureComponent {
  render() {
   return (
     <TouchableOpacity style={ style.marged } onPress={this.props.onPress}>
       <View
         style={style.button}
         styleName="horizontal h-center vertical v-center">
         <Icon name={this.props.icon} style={style.text} size={20} />
       </View>
     </TouchableOpacity>
   );
  }
}

RoundedButton.propTypes = {
  label: PropTypes.string,
};

RoundedButton.defaultProps = {
  icon: 'check'
};

export default RoundedButton;

import React, { PureComponent } from 'react';
import { View, Text } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../Themes";

/**
 * Props: visible - hide or not the component empty
 */
class EmptyData extends React.Component {
  render() {
    if (this.props.visible) 
    {
      return (
        <View styleName="vertical h-center v-center" style={{ marginTop: 30 }}>
          <Icon
            name="folder-open"
            size={50}
            style={{ color: Colors.GRAY_LIGHT }}
          />
          <Text>Listagem vazia</Text>
        </View>
      );
    }    
    return null
  }
}

export default EmptyData
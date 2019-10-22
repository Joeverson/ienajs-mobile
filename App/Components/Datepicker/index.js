import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import style from './Datepicker.styles';
import { View, Row } from "@shoutem/ui";
import Select from "../Select";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import { Colors } from "../../Themes";
import Icon from "react-native-vector-icons/FontAwesome5";

class Datepicker extends PureComponent {
  state = { date: moment().format("DD/MM/YYYY") };

  componentDidMount() {
    this.props.onChange(this.state.date);
  }

  render() {
    return (
      <View
        styleName="vertical"
        style={{
          borderBottomColor: Colors.BLUE,
          borderBottomWidth: 1,
          paddingLeft: 18,
          marginLeft: 5,
          marginRight: 5,
          paddingTop: 20,
        }}>
        <Icon style={{ color: Colors.BLUE }} size={16} name="calendar" />
        <DatePicker
          style={{
            marginTop: -28,
          }}
          date={this.props.date || this.state.date}
          mode="date"
          placeholder={this.props.placeholder}
          format="DD/MM/YYYY"
          // minDate="2016-05-01"
          // maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: "none",
            },
            dateInput: {
              borderWidth: 0,
            },
          }}
          onDateChange={date => {
            this.setState({
              date,
            });
            this.props.onChange(date);
          }}
        />
      </View>
    );
  }
}

Datepicker.propTypes = {
  // bla: PropTypes.string,
};

Datepicker.defaultProps = {
  // bla: 'test',
};

export default Datepicker;

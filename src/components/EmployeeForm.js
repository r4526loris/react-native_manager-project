import React,{Component} from "react";
import {View,Text,Picker}from "react-native";
import {connect} from "react-redux";

import {employeeUpdate} from "../actions";
import {CardSection,Input} from "./common";

class EmployeeForm extends Component {

  onNameChange(text){
    this.props.employeeUpdate({
      prop: 'name',
      value: text
    })
  }
  onPhoneChange(text){
    this.props.employeeUpdate({
      prop: 'phone',
      value: text
    })
  }
  onDayChange(text){
    this.props.employeeUpdate({
      prop: 'shift',
      value: text
    })
  }

  render(){
    return(
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}/>
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={this.onPhoneChange.bind(this)}
            value={this.props.phone}/>
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={this.onDayChange.bind(this)}>
            <Picker.Item label="Monday" value="monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    )
  }

}

const styles = {
  pickerStyle: {
    //flex: 1
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
}

const mapStateToProps = (state)=>{
  const {name,phone,shift} = state.employeeForm;
  return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)

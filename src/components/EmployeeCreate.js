import React,{Component} from "react";
import {Text,Picker} from "react-native";
import {connect} from "react-redux";

import EmployeeForm from "./EmployeeForm";
import {employeeCreate} from "../actions";
import {Card,CardSection,Button} from "./common";

class EmployeeCreate extends Component {

  onButtonPress(){
    const {name,phone,shift} = this.props;
    this.props.employeeCreate({name,phone,shift: shift || 'Monday'})
  }

  render(){
    return(
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }

}

const mapStateToProps = (state)=>{
  const {name,phone,shift} = state.employeeForm;
  return {
    name: name,
    phone: phone,
    shift: shift
  }
}

export default connect(mapStateToProps,{
  employeeCreate
})(EmployeeCreate)

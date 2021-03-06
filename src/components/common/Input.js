import React, {Component} from "react";
import {TextInput, View, Text} from "react-native";

export class Input extends Component {

  render(){
    let {secureTextEntry,label,placeholder,value,onChangeText} = this.props;
    const {inputStyle,labelStyle,containerStyle} = styles;
    return(
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          placeholder={placeholder}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}/>
      </View>
    )
  }

}

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 40,
    width: 100
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class MyButton extends React.Component{

    render(){

        return(
            <View style = {{flex:1, backgroundColor:'black',borderRadius:16}} >
                <TouchableOpacity onPress = {this.props.onPress} style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style = {{color:'white',fontSize:16}}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>

        );

    }
}
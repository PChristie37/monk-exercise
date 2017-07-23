import React, { Component } from 'react';
import { Button, LayoutAnimation, StyleSheet, Text, View, TextInput, Image } from 'react-native';


//import { login } from "./../../actions/userActions";

import { connect, thunk } from "react-redux";
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import * as actions from  "./../../actions/albumActions";

import {bindActionCreators} from 'redux';



class PhotoDetail extends Component {
  constructor() {
    super();
    this.state= {
      didI:"no",
    }
  }


  /* Renders not Header */
  static navigationOptions = {
   // header: null
  };
  
 onPressLearnMore = () => {
  console.log(this.props)
  console.log(this.props.state.album.albums[0].title)
 }
  

  render() { 
    const {
      albumsFulfilled,
      albums,
    } = this.props.state.album;

      return (
        <View style={{flex:1}}>
          
          <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
          />     

          <Text>{albumsFulfilled ? this.props.state.album.albums[0].title : null}</Text> 
          <Text>{this.state.didI}</Text>  
        </View>
      
      );
    }
  }


export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(PhotoDetail);

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    width: 208, 
    height: 77
  },
  text: {
    fontSize:22, 
    color:'#4891a1',
  },
  textInput:{
    height: 40, 
    width: 250, 
    backgroundColor:'white', 
    borderColor: '#4891a1', 
    borderWidth: 1,
    textAlign:'center'
  },
});

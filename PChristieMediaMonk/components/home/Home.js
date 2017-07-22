import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Text, View, TextInput, Image } from 'react-native';


//import { login } from "./../../actions/userActions";

import { connect, thunk } from "react-redux";
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import * as actions from  "./../../actions/albumActions";

import {bindActionCreators} from 'redux';


class Home extends Component {
  constructor() {
    super();
    this.state= {
      
    }
  }

  componentWillMount() {
    console.log(this);
    this.props.actions.getAlbums()
        .then(() =>{ 
            console.log(this.props);
          });
  }

  /* Renders not Header */
  static navigationOptions = {
   // header: null
  };
  

  

  render() { 
      return (
        <View style={{flex:1}}>
          <Text style={{textAlign:'center'}}>hey</Text>        
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
)(Home);

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

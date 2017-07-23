import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { connect, thunk } from "react-redux";
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import * as actions from  "./../../actions/albumActions";

import {bindActionCreators} from 'redux';

import { List, ListItem } from 'react-native-elements';


class Home extends Component {
  constructor() {
    super();
    this.state= {
      didI:"no",
    }
  }

componentDidMount() {
  this.timer = setTimeout(() => {
    if(!this.props.state.album.albumsFulfilled){
      this.props.actions.getAlbums()
          .then(() =>{ 
            console.log("gotem");
            this.setState({didI:"yes"})
          });
    }
  }, 2000);
}

componentWillUnmount() {
  clearTimeout(this.timer);
}


  /* Renders not Header */
  static navigationOptions = {
   // header: null
  };
  
 onLearnMore = (album) => {
  console.log(album)
  //console.log(this.props.state.album.albums.slice(0, size).map(i => {})
  this.props.navigation.navigate('AlbumDetails', {album:album});
 }
  

  render() { 
    const {
      albumsFulfilled,
      albums,
    } = this.props.state.album;

    const size = 3;
    // const items = this.props.state.album.albums.slice(0, size).map(i => {
    //      <Text key={i.id}>{i.id}</Text>
    // }

    //const albumList = <Text>loading</Text>

    var albumList;
    if(albumsFulfilled){
          albumList = <List containerStyle={{borderBottomColor: "#4891a1"}}>
                      {this.props.state.album.albums.slice(0, 100).map((album,i) => (
                         <ListItem
                           chevronColor="#4891a1"
                           key={album.id}
                           title={album.id}
                           subtitle={album.title}
                           onPress={() =>this.onLearnMore(album)}
                           titleStyle={{color:'black'}}
                           subtitleStyle={{color:'#4891a1'}}
                         />
                       ))}
                     </List>
    }else{
     albumList = <Text>Hi</Text>    
    }
      


      return (
        <View style={{flex:1}}>
          <Text>{albumsFulfilled ? this.props.state.album.albums[0].title : null}</Text> 
          <Text>{this.state.didI}</Text>
          <ScrollView>
          {albumsFulfilled ? albumList : null}
          </ScrollView>  
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

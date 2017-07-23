import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect, thunk } from "react-redux";
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import * as actions from  "./../../actions/albumActions";

import ListDetails from './../customComponents/ListDetails';


class PhotoList extends Component {
  constructor() {
    super();
  }
  
 onLearnMore = (album) => {
  this.props.navigation.navigate('AlbumDetails', {album:album});
 }
  
  render() { 
    const {
      albumsFulfilled,
      albums,
    } = this.props.state.album;

    var albumList;
    if(albumsFulfilled){
      albumList =<ScrollView>
                    <View style={styles.container}>
                    {this.props.state.album.albums.slice(0, 100).map((album,i) => (
                      <View key={album.id} style={{padding:5}}>
                        <TouchableHighlight onPress={() => this.onLearnMore(album)}> 
                          <Image style={styles.image} source={{uri:album.thumbnailUrl}} />
                        </TouchableHighlight>
                      </View>  
                 ))}
                  </View>
                </ScrollView>
                     
    }else{
     albumList = <Text>Loading...</Text>    
    }

      return (
        <View style={{flex:1}}>
          <View> 
          {albumsFulfilled ? albumList : null}
          </View>
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
)(PhotoList);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection:'row', 
    justifyContent: 'center', 
    flexWrap:"wrap"
  },
  image: {
    width: 150, 
    height: 150
  },
});

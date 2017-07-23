import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect, thunk } from "react-redux";
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import * as actions from  "./../../actions/albumActions";

import ListDetails from './../customComponents/ListDetails';


class PhotoDetail extends Component {
  constructor() {
    super();
  }

  /* Navigates to AlbumDetails with Payload of the Album as prop */
  onLearnMore = (album) => {
    this.props.navigation.navigate('AlbumDetails', {album:album});
  }
  

  render() { 
    const {
      albumsFulfilled,
      albums,
    } = this.props.state.album;

    /* Conditionally Rendering on if we have fetched the Album Data yet, then maps the first 100 into a ListDetails Custom Component */
    var albumList;
    if(albumsFulfilled){
      albumList = <ScrollView>
                  {this.props.state.album.albums.slice(0, 100).map((album,i) => (
                      <ListDetails key={album.id} album={album} onPress={() => this.onLearnMore(album)} />
                 ))}
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
)(PhotoDetail);

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import * as actions from  "./../../actions/albumActions";

import {bindActionCreators} from 'redux';
import { connect, thunk } from "react-redux";
import Details from './../customComponents/Details'

class AlbumDetails extends Component {
  constructor() {
    super();
    this.state= {
    }
  }

componentWillMount() {
  console.log(this)
}
  /* Renders not Header */
  static navigationOptions = {
   // header: null
  };
  
 onPressNext = (id) => {
  console.log(id)
  const nextAlbum = id + 1;
  console.log(nextAlbum);
  console.log(this.props.state.album.albums[nextAlbum]);
  this.props.navigation.navigate('AlbumDetails', {album:this.props.state.album.albums[nextAlbum]});
 }
  


  render() { 
    const { 
        albumId,
        id,
        thumbnailUrl,
        title,
        url
      } = this.props.navigation.state.params.album;

    return (
      <View>
        <Details albumId={albumId} id={id} thumbnailUrl={thumbnailUrl} title={title} url={url} />
        <Button
          onPress={() =>this.onPressNext(id)}
          title="Next"
          color="#841584"
        />
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
)(AlbumDetails);


const styles = StyleSheet.create({
  
});

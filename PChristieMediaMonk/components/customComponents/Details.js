import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import { List, ListItem } from 'react-native-elements';


class Details extends Component {
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
  
 onLearnMore = (album) => {
  console.log(album)
  //console.log(this.props.state.album.albums.slice(0, size).map(i => {})
 }
  

  render() { 
    const { 
        albumId,
        id,
        thumbnailUrl,
        title,
        url
      } = this.props;
      
    return (
        <View style={{flex:1, alignItems: 'center', }}>
            <Text>AlbumID: {albumId}</Text>
            <Text>id: {id}</Text>
            <Image style={{width: 150, height: 150}} source={{uri:thumbnailUrl}} /> 
            <Text>Title: {title}</Text>
            <Image style={{width: 150, height: 150}} source={{uri:url}} /> 
        </View>
      
      );
    }
  }


export default Details;

const styles = StyleSheet.create({
  
});
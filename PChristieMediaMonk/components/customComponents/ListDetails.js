import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class ListDetails extends Component {
  render() { 
    const { 
        album,
        onPress
      } = this.props;
      
    return (
      <TouchableHighlight onPress={() => onPress(album)}>
        <View key={album.id} style={styles.container}>
          <Image style={styles.image} source={{uri:album.thumbnailUrl}} />
          <View style={{paddingLeft:5}}>
            <Text>AlbumId: {album.albumId}</Text>
            <Text>id: {album.id}</Text>
            <Text>ThumbnailUrl: {album.thumbnailUrl}</Text>
            <Text>Title: {album.title}</Text>
            <Text>URL: {album.url}</Text>
          </View>
        </View>
      </TouchableHighlight>
      );
    }
  }


export default ListDetails;

const styles = StyleSheet.create({
   container:{
    flexDirection:'row', 
    marginBottom:5,
    marginTop:5, 
    padding:5
  },
  image:{
    width: 150, 
    height: 150
  },
});
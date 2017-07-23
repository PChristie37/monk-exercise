import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class Details extends Component {
  render() { 
    const { 
        album
      } = this.props;
      
    return (
        <View style={styles.container}>
            <Text>AlbumID: {album.albumId}</Text>
            <Text>id: {album.id}</Text>
            <Text>Title: {album.title}</Text>
            <Image style={styles.image} source={{uri:album.thumbnailUrl}} />
            <Text>{album.thumbnailUrl}</Text>
            <Image style={styles.image} source={{uri:album.url}} /> 
            <Text>{album.url}</Text>
        </View>
      
      );
    }
  }

export default Details;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center'
  },
  image:{
    width: 150, 
    height: 150
  },
});
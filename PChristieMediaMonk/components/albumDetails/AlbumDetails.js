import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View  } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux';
import { connect, thunk } from "react-redux";
import * as actions from  "./../../actions/albumActions";
import Details from './../customComponents/Details'

class AlbumDetails extends Component {
  constructor() {
    super();
  }
  
  /* Takes album id which is 1 higher then the next objects placement and grabs that from store, then navigates back to AlbumDetails with the new Album */
  onPressNext = (id) => {
    var nextAlbum = id;
    if(nextAlbum > 4999){
      nextAlbum = 0; //Should be size of store's albums.
    }
    console.log(nextAlbum);
    this.props.navigation.navigate('AlbumDetails', {album:this.props.state.album.albums[nextAlbum]});
  };

  /* Takes album id and subtracts 2 and grabs that from store, then navigates back to AlbumDetails with the new Album */
  onPressPrevious = (id) => {
    var previousAlbum = id - 2;
    if(previousAlbum < 0){
       previousAlbum = previousAlbum + 4999; //Should be size of store's albums.
    }
    this.props.navigation.navigate('AlbumDetails', {album:this.props.state.album.albums[previousAlbum]});
  };
  
  /* Navigates User back to the Home Page */
  onPressHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() { 
    const { 
        album
      } = this.props.navigation.state.params;

    return (
      <View style={{flex:1}}>
       <View style={styles.buttonContainer}>
          <Button buttonStyle={styles.button} backgroundColor="#4891a1" onPress={()=>this.onPressPrevious(album.id)} title='Previous' />
          <Button buttonStyle={styles.button} backgroundColor="#4891a1" onPress={()=>this.onPressHome()} title='Home' />
          <Button buttonStyle={styles.button} backgroundColor="#4891a1" onPress={()=>this.onPressNext(album.id)} title='Next' />
        </View>
        <View style={styles.detailsContainer}>
          <Details album={album} />
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
)(AlbumDetails);


const styles = StyleSheet.create({
  button:{
    width: 150,
    marginTop: 10
  },
  buttonContainer:{
    flex:.2, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingBottom: 10
  },
  detailsContainer:{
    flex:3, 
    justifyContent: 'flex-start'
  },
});

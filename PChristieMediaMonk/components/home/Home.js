import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect, thunk } from "react-redux";
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'react-native-elements';
import * as actions from  "./../../actions/albumActions";


class Home extends Component {
  constructor() {
    super();
  }

  /* Delays for 2 seconds, allowing for redux-persist to fill store again */
  componentDidMount() {
    this.timer = setTimeout(() => {
      if(!this.props.state.album.albumsFulfilled){
        this.props.actions.getAlbums()
            .then(() =>{ 
              console.log("First Fetch");
            });
      }
    }, 2000);
  }

  /* Unmounts the timer, so no endless loop */
  componentWillUnmount() {
    clearTimeout(this.timer);
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


    /* Conditionally Rendering on if we have fetched the Album Data yet, then maps the first 100 into a listItem */
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
     albumList = <Text>Loading...</Text>    
    }
      
      return (
        <View style={{flex:1}}>
          <ScrollView>
            {albumsFulfilled ? albumList :<Text>Loading...</Text>}
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


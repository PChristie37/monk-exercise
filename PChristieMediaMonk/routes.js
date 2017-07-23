import React from 'react';
import AlbumDetails from './components/albumDetails/AlbumDetails';
import Home from './components/home/Home';
import PhotoDetail from './components/home/PhotoDetail';
import PhotoList from './components/home/PhotoList';
import { TabNavigator } from 'react-navigation';


/* create tabstack for HomePage */
export const HomeTabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        tabBarLabel: 'Albums',
    },
  },
  PhotoDetail: {
    screen: PhotoDetail,
    navigationOptions: {
        tabBarLabel: 'Album Covers',
    },
  },    
  PhotoList: {
    screen: PhotoList,
    navigationOptions: {
        tabBarLabel: 'Photos',
    },
  },
}, {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#cdcdcd',
        showicon:false,
        style: {
          backgroundColor: '#4891a1',
        },
        indicatorStyle: {
          backgroundColor:'white',
        },
      },
      swipeEnabled:false,
      animationEnabled:false,
      lazy: true,
});

/* stackNavigation */
const Routes = {
	Home: { screen: HomeTabs },
  AlbumDetails:{ screen: AlbumDetails}
};

export default Routes;
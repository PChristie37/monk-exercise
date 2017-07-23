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
        //tabBarIcon: ({ tintColor }) => <Icon name='people' size={30} color={tintColor} />, 
    },
  },
  PhotoDetail: {
    screen: PhotoDetail,
    navigationOptions: {
        tabBarLabel: 'Photo',
        //tabBarIcon: ({ tintColor }) => <Icon name="work" size={30} color={tintColor} />
    },
  },    
  PhotoList: {
    screen: PhotoList,
    navigationOptions: {
        tabBarLabel: 'Photo Details',
        //tabBarIcon: ({ tintColor }) => <Icon name="mode-comment" size={30} color={tintColor} />
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
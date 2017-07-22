import React from 'react';
import Home from './components/home/Home';


import { TabNavigator } from 'react-navigation';


/* create tabstack for ContactDetails */
// export const Tabs = TabNavigator({
//   ContactDetails: {
//     screen: ContactDetails,
//     navigationOptions: {
//         tabBarLabel: 'Details',
//         tabBarIcon: ({ tintColor }) => <Icon name='people' size={30} color={tintColor} />, 
//     },
//   },
//   ContactHistory: {
//     screen: ContactHistory,
//     navigationOptions: {
//         tabBarLabel: 'Tickets',
//         tabBarIcon: ({ tintColor }) => <Icon name="work" size={30} color={tintColor} />
//     },
//   },    
//   Quotes: {
//     screen: QuotesCreate,
//     navigationOptions: {
//         tabBarLabel: 'New Quote',
//         tabBarIcon: ({ tintColor }) => <Icon name="mode-comment" size={30} color={tintColor} />
//     },
//   },
// }, {
//       tabBarOptions: {
//         activeTintColor: 'white',
//         inactiveTintColor: '#cdcdcd',
//         showicon:false,
//         style: {
//           backgroundColor: '#4891a1',
//         },
//         indicatorStyle: {
//           backgroundColor:'white',
//         },
//       },
//       swipeEnabled:false,
//       animationEnabled:false,
//       lazy: true,
// });

/* create tabStack for Reports */
// export const ReportsTabs = TabNavigator({
//   QuotesReports: {
//     screen: QuotesReports,
//     navigationOptions: {
//         tabBarLabel: 'Quotes',
//         tabBarIcon: ({ tintColor }) => <Icon name='people' size={30} color={tintColor} />, 
//     },
//   },
//   WorkOrderReports: {
//     screen: WorkOrderReports,
//     navigationOptions: {
//         tabBarLabel: 'Workorders',
//         tabBarIcon: ({ tintColor }) => <Icon name="work" size={30} color={tintColor} />
//     },
//   },    
// }, {
//       tabBarOptions: {
//         activeTintColor: 'white',
//         inactiveTintColor: '#cdcdcd',
//         showicon:false,
//         style: {
//           backgroundColor: '#4891a1',
//         },
//         indicatorStyle: {
//           backgroundColor:'white',
//         },
//       },
//       swipeEnabled:false,
//       animationEnabled:false,
//       lazy: false,
// });


/* stackNavigation */
const Routes = {
	Home: { screen: Home },
	
};

export default Routes;
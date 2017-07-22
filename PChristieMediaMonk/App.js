import React, { Component } from "react";
import { Text } from "react-native";
import { Provider, connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Routes from "./routes";

import getStore from "./components/store";

const AppNavigator = StackNavigator(Routes, {
    // navigationOptions: {
    //     title: ({ state }) => {
    //         if (state.params) {
    //             return `${state.params.title}`;
    //         }
    //     }
    // }
});


const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    
    return newState || state;
};

// export default connect(state => ({
//     nav: state.nav
//   }));

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore(navReducer);

export default function PChristieMediaMonk() {

    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./src/store/reducers/MainReducer";
import ReduxThunk from "redux-thunk";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/containers/HomeScreen";


const screenNavigator = createStackNavigator(
  {
    activitiesScreen: {
      screen: HomeScreen
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const MainNavigator = createAppContainer(screenNavigator);


const store = createStore(mainReducer, applyMiddleware(ReduxThunk));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

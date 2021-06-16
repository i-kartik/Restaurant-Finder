import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./src/screens/searchScreen";
import SearchBar from "./src/components/searchBar";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
const navigator = createStackNavigator(
  {
    Search: searchScreen,
    Bar: SearchBar,
    ShowScreen: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);

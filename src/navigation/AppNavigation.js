import { StackNavigator, TabNavigator } from "react-navigation";
import Day20Screen from "../containers/Day20Screen";

const AppNavigation = StackNavigator(
  {
    Day20Screen: { screen: Day20Screen }
  },
  {
    initialRouteName: "Day20Screen"
  }
);

export default AppNavigation;

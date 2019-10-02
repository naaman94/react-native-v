import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Settings from './Settings';
import Catigories from './Catigories';
import MyCatigories from './MyCatigories';
import Notifications from './Notifications';
import list from './List';
import CatSlice from './CatSlice';
import ListForAllCat from './ListForAllCat'
import HelloScreen from './HelloScreen'
const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  MyCatigories: { screen: MyCatigories },
  Catigories: { screen: Catigories },
  CatSlice: { screen: CatSlice },
  list: { screen: list },
  Notifications: { screen: Notifications },
  Settings: { screen: Settings },
  ListForAllCat: { screen: ListForAllCat },
  HelloScreen: { screen: HelloScreen },

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(MainNavigator);

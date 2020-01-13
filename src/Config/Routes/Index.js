import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  DetailProfile,
  Home,
  HomeCompany,
  Login,
  Register,
} from '../../Container/Pages/Index';

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const Routes2 = createStackNavigator(
    {
    HomeCompany: {
        screen: HomeCompany,
      },
      DetailProfile: {
        screen: DetailProfile,
      },
    },
      {
        headerMode: 'none',
        initialRouteName: 'HomeCompany',
      },
);

const Router = createSwitchNavigator(
    {
        Routes,
        Routes2
    },
    {
        headerMode: 'none',
        initialRouteName: 'Routes',
      },
)

export default createAppContainer(Router);

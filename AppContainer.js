import {createStackNavigator} from 'react-navigation';
import {TumbrlList} from './TumbrlList';
import {TumbrlPostDetails} from './TumbrlPostDetails';

export const Routes = createStackNavigator({
  TumbrlList: {
    screen: TumbrlList,
    navigationOptions: {
      title: 'Welcome to TumbrlList',
    }
  },
  TumbrlPostDetails: {
    screen: TumbrlPostDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.summary}`
    })
  }
})
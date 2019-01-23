import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TEST_DATA from "./data.json";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TumbrlList} from './TumbrlList';
import {TumbrlPostDetails} from './TumbrlPostDetails';

const Routes = createAppContainer(createStackNavigator({
  TumbrlList: {
    screen: TumbrlList,
    navigationOptions: {
      title: "Welcome to my Gallery!",
    }
  },
  TumbrlPostDetails: {
    screen: TumbrlPostDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.summary}`,
    })
  }
}));
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      page: 0,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore = async () => {
    const newPage = this.state.page + 1;
    await this.fetchWithPage(newPage);
    this.setState({
      page: newPage,
    })
  }

  fetchWithPage = async (page) => {
    this.setState({
      loading: true,
    });

    const apiUrl = "https://api.tumblr.com/v2/blog/itzahann/posts/photo/";
    const apiKey = "ffisiufJDXX82i1zdHHu8KCsL1aS42VqMo12wJO3ZWl8N5kc5f&limit=4";
    try {
      const response = await fetch(`${apiUrl}?api_key=${apiKey}&offset=${page*100}`);
      const data = await response.json();
      this.setState({
        posts: data.response.posts,
        loading: false,
      });
    } catch(error) {
      this.setState({
        // If one does not fetch data correctly from server!
        posts: TEST_DATA.response.posts,
        loading: false,
      });
    }
  }

  async componentDidMount() {
    this.fetchWithPage(0);
  }

  render() {
      return (
          <Routes style = {styles.container}
            screenProps = {{
              posts: this.state.posts,
              loadMore: this.loadMore,
              loading : this.loading,
            }}>
          </Routes>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    color: 'red'
  }
});
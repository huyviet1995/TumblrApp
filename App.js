import React from 'react';
import {FlatList,StyleSheet, Text, View} from 'react-native';
import TEST_DATA from "./data.json";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    const apiUrl = "https://api.tumblr.com/v2/blog/itzahann/posts/photo";
    const apiKey = "ffisiufJDXX82i1zdHHu8KCsL1aS42VqMo12wJO3ZWl8N5kc5f&limit=4";
    try {
      const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
      const data = await response.json();
      console.log("The application is running successfully!");
      this.setState({
        posts: data.response.posts,
        loading: false,
      });
      console.log(this.state.posts[0].trail[0].blog.theme.header_image);
    } catch(error) {
      this.setState({
        posts: TEST_DATA.response.posts,
        loading: false,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TumbrlPost post = {this.state.posts[0]} />
      </View>
    );
  }
}
class TumbrlList extends React.Component {
  render() {
    return (
      <FlatList
        data = {this.props.posts}
        keyExtractor = {(post) => post.id}
        renderItem = {(postItem) => {<TumbrlPost post = {postItem[0]}/>}}
      /> 
    )
  }
}


class TumbrlPost extends React.Component {
  render() {
    const img = {uri: this.props.post.trail[0].blog.theme.header_image};
    return (
      <View>
        <Image
          source = {{uri: this.img.uri}}
          style = {{width: 50, height: 50}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400,
    color: 'red'
  }
});
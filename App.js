import React from 'react';
import {FlatList,StyleSheet, Text, View} from 'react-native';
import TEST_DATA from "./data.json";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: ["Nothing works here"],
      loading: false
    };
    this.fetchWithPage = this.fetchWithPage.bind(this);
  }

  async fetchWithPage(page) {
    const apiUrl = "https://api.tumblr.com/v2/blog/itzahann/posts/photo";
    const apiKey = "ffisiufJDXX82i1zdHHu8KCsL1aS42VqMo12wJO3ZWl8N5kc5f&limit=4";
    const response = await fetch('${apiUrl}?api_key=${apiKey}&offset={page*4}');
    const data = await response.json();
    this.setState({
      posts: data.response.posts,
      loading: false,
    });
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    fetchWithPage(4);
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to my application </Text>
        <TumbrlList posts = {this.state.posts} />
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
        renderItem = {(postItem) => {
           <Text>{postItem.item.caption}</Text>
        }}
     /> 
    )
  }
}

class TumbrlPost extends React.Component {
  render() {
    const img = {uri: this.props.post.trail.blog.theme.header_image};
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

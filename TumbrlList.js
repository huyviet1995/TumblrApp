
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet, Text} from 'react-native';
import {TumbrlPost} from './TumbrlPost';
export class TumbrlList extends React.Component {

  loadDetails = (description, image_uri) => {
    this.props.navigation.navigate('TumbrlPostDetails',{
      details: description,
      image_uri: image_uri, 
    });
  }

  render() {
    const props = this.props.screenProps;
    return (
      <FlatList style = {styles.container}
        data = {props.posts}
        keyExtractor = {(post) => post.id}
        renderItem = {({item}) => { return <TumbrlPost post = {item} loadDetails = {() => this.loadDetails(item.summary, item.trail.blog[0].theme.header_image)}/>}}
        onEndReachedThreshold = {100}
        onEndReached = {props.loadMore}
        refreshing = {props.loading}
        ListFooterComponent = {() => {
          return  (
            <View>
              <ActivityIndicator size = "large" />
            </View>
          )
        }}
      /> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  }
})
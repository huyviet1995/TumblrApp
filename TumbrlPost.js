import React,{Componenet} from 'react';
import {TouchableHighlight, StyleSheet, Text, View,Image} from 'react-native';
export class TumbrlPost extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress ={() => {this.props.loadDetails}} >
        <View style = {styles.container}>
          <Image
            source = {{uri: this.props.post.trail[0].blog.theme.header_image}}
            style = {styles.image}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
  image: {
    width: 300,
    height: 400,
  }
});
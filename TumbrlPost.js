import React from 'react';
import StyleSheet from 'react-native';

class TumbrlPost extends React.Component {
  render() {
    const img = {uri: this.props.post.trail[0].blog.theme.header_image};
    return (
      <View style = {[styles.color.red, styles.container.height, styles.container.width]}></View>
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

import React from 'react';

class TumbrlList extends React.Component {
  render() {
    return (
      <FlatList
        data = {this.props.posts}
        keyExtractor = {(post) => post.id}
        renderItem = {(postItem) => {return <Text>{postItem.item.caption}</Text>}}
     /> 
    )
  }
}
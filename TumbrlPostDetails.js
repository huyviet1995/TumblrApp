import React,{Component} from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
import {HTMLView} from 'react-native-htmlview';

export class TumbrlPostDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const description = this.props.navigation.getParam("details");
    const image_uri = this.props.navigation.getParam("image_uri");
    console.log(description);
    console.log(image_uri);
    const img = {
      uri: image_uri,
    };
    return (
      <View>
        <Image
          source = {img}/>
      <View >
        <HTMLView value = {description} />
      </View>
      </View>
    )
  }
} 

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex:1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackImage: {
    width:200,
    height:200,
    borderRadius: 50,
  }
})

const TracksDetailsScreen = (props) => {
  const [details, setDetails] = useState(null)
  useEffect(()=> {
    setDetails(props.route.params.track)
  }, [])
  const {track} = props.route.params
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.trackImage} source={{
          uri: track.image[2]['#text']
        }}/>
      </View>
    </View>
  )
}

export default TracksDetailsScreen
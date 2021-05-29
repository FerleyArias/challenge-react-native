import React from 'react'
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row'
  },
  trackInfo : {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center'
  }, 
  trackImg: {
    width: 60,
    height: 60
  },
  trackTitle: {
    color: '#FFF'
  },
  trackSubTitle: {
    color: '#737C8B'
  },
  meuIcon: {
    color: '#737C8B',
    fontSize: 25
  }
})
const TrackItem = ({track, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.trackImg} source={{
          uri: track.image[0]['#text']
        }}/>
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>{track.name}</Text>
          <Text style={styles.trackSubTitle}>{track.artist.name}</Text>
        </View>
        <Pressable>
          <Text style={styles.meuIcon}>...</Text>
        </Pressable>
      </View>
    </Pressable>
  )
}

export default TrackItem
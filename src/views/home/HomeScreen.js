import React, {useEffect, useState} from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as tracksActions from '../../redux/actions/tracksActions'
import api from '../../libs/api'
import TrackItem from '../../components/TrackItem'

const styles = StyleSheet.create({
  loading: {
    color: '#FFF',
    textAlign: 'center',
  }
})

const HomeScreen = (props) => {
  useEffect(()=> {
    const asyncfun = async () => {
      if(props.tracks.length === 0) {
        await props.getAll()
      }
    }
    asyncfun()
  }, [])
  return (
    <View>
      <View>
        {
        props.load? 
          <Text style={styles.loading}>...Loading</Text>:
        props.tracks.map((track, index)=> {
          console.log(track);
          return (
            <TrackItem key={index} track={track} onPress={() => props.navigation.navigate('TracksDetails', { track })}/>
          )
        })}
      </View>
    </View>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.tracksReducer;
}

export default connect(mapStateToProps, tracksActions)(HomeScreen)
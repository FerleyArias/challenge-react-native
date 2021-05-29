import {
  LOADING,
  ERROR,
  GET_ALL,
  ADD_RECENT
} from '../types/tracksTypes'
import api from '../../libs/api'

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const data = await api.getTopTracks()
    dispatch({
      type: GET_ALL,
      payload: data.track
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}

export const addRecent = (track) => (dispatch, getState) => {
  const { recentTracks } = getState().tracksReducer
  const updateRecentTracks = [...recentTracks]
  updateRecentTracks.unshift(track)
  if(updateRecentTracks.length > 10) {
    updateRecentTracks.splice(-1,1)
  }
  dispatch({
    type: ADD_RECENT,
    payload: updateRecentTracks
  })
}
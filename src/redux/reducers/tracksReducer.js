import {
  GET_ALL,
  ADD_RECENT,
  LOADING,
  ERROR
} from '../types/tracksTypes'

const INITIAL_STATE = {
  recentTracks: [],
  tracks: [],
  load: false,
  error: null,
}

const tracksReducer = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case GET_ALL:
      return { 
        ...state, 
        tracks: action.payload,
        load: false
      }
    case ADD_RECENT:
      return { 
        ...state, 
        recentTracks: action.payload,
      }
    case LOADING:
      return { 
        ...state, 
        load: true,
        error: null
      }
    case ERROR:
      return {
        ...state,
        load: false,
        error: action.payload
      }

    default: return state;
  }
}

export default tracksReducer
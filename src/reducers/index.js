import {combineReducers} from 'redux'

import game from './game'
import bird from './bird'
import pipe from './pipe'

export default combineReducers({
  game,
  bird,
  pipe,
})

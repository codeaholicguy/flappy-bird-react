export default (state = {}, {type} = {}) => {
  switch (type) {
    case 'START':
      return {...state, status: 'playing'}
    case 'GAME_OVER':
      return {...state, status: 'game-over'}
    default:
      return state
  }
}

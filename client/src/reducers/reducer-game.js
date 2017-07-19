

export default (state = {
  song: 'Def.mp3',
  score: 0,
  hit: false,
  ongoing: false,
  bpm: 125,
  difficulty: 'super_beginner',
  players: 1
}, action) => {
  switch (action.type) {
  case 'GET_GAME' : {
    break;
  }
  case 'CHANGE_SONG' : {
    state.song = action.payload;
    break;
  }
  case 'CHANGE_BPM' : {
    state.bpm = action.payload;
    break;
  }
  case 'CHANGE_DIFFICULTY' : {
    state.difficulty = action.payload;
    break;
  } 
  case 'CHANGE_PLAYERS' : {
    state.players = action.payload;
    break;
  }
  }
  return state;
};


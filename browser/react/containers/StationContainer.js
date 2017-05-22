import Station from '../components/Station';
import {connect} from 'react-redux';
import {convertSong} from  '../utils';
import {toggleSong} from '../action-creators/player';


function mapStateToProps(state, ownProps){
  const genre = ownProps.params.genre;
  return {
    genre: genre,
    songs: state.songs
      .filter(song => song.genre === genre)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}
function mapDispatchToProps(dispatch, ownProps){
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  };
}

 const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);
 export default StationContainer;

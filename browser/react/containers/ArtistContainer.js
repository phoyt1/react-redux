import {connect} from 'react-redux'
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps){
  console.log(state)
  return {
        player: state.player,
        selectedArtist: state.artists.selected,
        children: ownProps.children
        // toggleOne: this.toggle
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list))
    }
  }
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist)
export default ArtistContainer;



// class ArtistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;
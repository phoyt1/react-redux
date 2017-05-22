import Stations from '../components/Stations'
import {connect} from 'react-redux'


function convertSongsToStations(songsArray){
  return songsArray.reduce(function(acc,val){
    if(acc[val.genre]) acc[val.genre].push(val)
    else acc[val.genre] = [val]
    return acc;
  },{})
}
function mapStateToProps(state, ownProps){
  return {
    stations: convertSongsToStations(state.songs)
  };
}
function mapDispatchToProps(dispatch, ownProps){
  return {

  };
}

 const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);
 export default StationsContainer


// export default class StationsContainer extends Component {
//   constructor(props){
//     super(props)
//     this.state = store.getState()
//   }


//   componentDidMount () {
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   }

//   // Job 4: unsubscribe when unmounting
//   componentWillUnmount () {
//     this.unsubscribe();
//   }


//   render(){
//     return (
//       <Stations />
//     )
//   }

// }

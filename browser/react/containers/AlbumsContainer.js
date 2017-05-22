import {connect} from 'react-redux'
import Albums from '../components/Albums';


function mapStateToProps(state, ownProps){
  return {
      albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums)
export default AlbumsContainer;



// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

// export default AlbumsContainer;

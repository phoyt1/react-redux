import React, {Component} from 'react';
import Stations from '../components/Stations'
import store from '../store';
import {connect} from 'react-redux'


function mapStateToProps(state){
  return {};
}
function mapDispatchToProps(dispatch){
  return {};
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

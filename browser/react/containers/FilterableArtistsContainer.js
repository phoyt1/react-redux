import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import { connect } from 'react-redux'
// import store from '../store';


function mapStateToProps(state, ownProps){
  // const inputValue = '';
  // const filteredArtists = state.artists.list.filter(artist => artist.name.match(inputValue));
  // console.log(filteredArtists)
  console.log('state', state);
  console.log('state artists', state.artists)
  return {
    allArtists: state.artists,
    // inputValue: inputValue
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {}
}

class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    console.log("PROPS", this.props);
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.allArtists && this.props.allArtists.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer);

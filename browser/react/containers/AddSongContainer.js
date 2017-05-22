import React from 'react';
import AddSong from '../components/AddSong';
import { loadAllSongs, addSongToPlaylist } from '../action-creators/playlists';
import { connect } from 'react-redux'


function mapStateToProps(state, ownProps) {
    return {
        songs: state.songs,
        playlists: state.playlists
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadSongs: function(){
            dispatch(loadAllSongs())
        },
        bananaFunTimes: function(playlistId, songId){
            dispatch(addSongToPlaylist(playlistId, songId))
        }
    }
}

class AddSongContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            songId: 1,
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadSongs();
    }

    handleChange(evt) {
        this.setState({
            songId: evt.target.value,
            error: false
        });
    }

    handleSubmit(evt) {
        evt.preventDefault(); 

       this.props.bananaFunTimes(this.props.playlists.selected.id, this.state.songId)

    }

    render() {

        const songs = this.props.songs;
        const error = this.state.error;
        const songId = this.state.songId;

        return ( <AddSong
            {...this.props }
            error = { error }
            songId = { songId }
            handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);


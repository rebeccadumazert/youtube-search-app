import React, { Component } from 'react';
import './App.css';
import Youtube from 'simple-youtube-api';
import AppTitle from './AppTitle.js';
import SearchBar from './SearchBar.js';
import VideoPlayer from './VideoPlayer.js';
import VideoItem from './VideoItem.js';
import auth from './auth.js';
import debounce from 'lodash.debounce';

const youtube = new Youtube(auth);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      idVideoOnClick: '',
      onChangeSearch: '',
    };
    this.debouncedSearch = debounce(this.newSearch, 200);
  }

  async componentDidMount() {
    const results = await youtube.searchVideos('Hulk', 5);
    this.setState({ videos: results });
  }

  async newSearch() {
    const results = await youtube.searchVideos(this.state.onChangeSearch, 5);
    this.setState({ videos: results });
  }

  onVideoClick(id) {
    this.setState({
      idVideoOnClick: id,
    });
  }

  onChangeSearch(event) {
    this.setState({
      onChangeSearch: event.target.value,
    });
    this.debouncedSearch()
  }

  render() {
    const {
      state: { videos },
    } = this;
    const {
      state: { idVideoOnClick },
    } = this;
    return (
      <div className="App">
        <AppTitle></AppTitle>
        <SearchBar
          search={this.newSearch.bind(this)}
          onChangeSearch={this.onChangeSearch.bind(this)}
          value={this.state.onChangeSearch}
        ></SearchBar>
        <div>
          <VideoPlayer idUrl={idVideoOnClick}></VideoPlayer>
        </div>
        <div>
          {videos.map(video => (
            <VideoItem
              video={video}
              idVideo={this.onVideoClick.bind(this)}
            ></VideoItem>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

import Input from 'react-toolbox/lib/input';
import React from 'react';

class VideoPlayer extends React.Component {
  state = {
    isPlaying: false,
    showingVolume: false,
    volume: 0.5,
    videoUrl: 'public/sample.mp4',
    backJump: 5,
    frontJump: 10,
    playbackRate: 1
  }

  toggleVolume = (event) => {
    this.setState({showingVolume: !this.state.showingVolume});
  }

  changeVolume = (event) => {
    this.setState({volume: event.target.value});
    this.refs.videoPlayer.volume = event.target.value;
  }

  togglePlay = (event) => {
    this.state.isPlaying === false ? this.refs.videoPlayer.play() : this.refs.videoPlayer.pause()
    this.setState({isPlaying: !this.state.isPlaying})
  }

  rewind = (event) => {
    if (this.refs.videoPlayer.playbackRate >= 0.5) this.refs.videoPlayer.playbackRate-= 0.5;
  }

  forward = (event) => {
    if (this.refs.videoPlayer.playbackRate < 4) this.refs.videoPlayer.playbackRate+= 0.5;
  }

  goBackward = (event) => {
    (this.refs.videoPlayer.currentTime > this.state.backJump) ? this.refs.videoPlayer.currentTime -= this.state.backJump : this.refs.videoPlayer.currentTime = 0
    if (this.refs.videoPlayer.currentTime === 0) this.togglePlay()
  }

  goForward = (event) => {
    (this.refs.videoPlayer.duration - this.refs.videoPlayer.currentTime > this.state.frontJump) ? this.refs.videoPlayer.currentTime += this.state.frontJump : this.refs.videoPlayer.currentTime = this.refs.videoPlayer.duration;
    if (this.refs.videoPlayer.duration - this.refs.videoPlayer.currentTime === 0) this.togglePlay()
  }

  setInput = (name, value) => {
    (value != '') ? this.setState({[name]: value}) : this.setState({[name]: 1});
    if (name === 'playbackRate' && value > 0) {
      this.setState({[name]: value})
      this.refs.videoPlayer.playbackRate = value;
    }
  }

  render () {
    return (
      <div className="videoPlayerContainer">
        <div className='playerContainer'>
          <video ref="videoPlayer" className='videoPlayer' onClick={this.togglePlay}>
            <source src={this.state.videoUrl} type='video/mp4' />
          </video>
          <div className='videoPlayerControls'>
            <input type="image" src="public/video-player/backward.png" onClick={this.goBackward.bind(this)} className="videoPlayerButton" />
            <input type="image" src="public/video-player/rewind.png" onClick={this.rewind} className="videoPlayerButton" />
            <input type="image" src="public/video-player/play.png" onClick={this.togglePlay} className={this.state.isPlaying? 'hidden' : 'videoPlayerButton'} />
            <input type="image" src="public/video-player/pause.png" onClick={this.togglePlay} className={this.state.isPlaying? 'videoPlayerButton' : 'hidden'} />
            <input type="image" src="public/video-player/forward.png" onClick={this.forward} className="videoPlayerButton" />
            <input type="image" src="public/video-player/fast-forward.png" onClick={this.goForward.bind(this)} className="videoPlayerButton" />
            <input type="image" src="public/video-player/stop.png" className="videoPlayerButton" />
            <input type="image" src="public/video-player/volume.png" className="videoPlayerButton" onClick={this.toggleVolume} />
            <input type="range" step="0.05" min="0" max="1" value={this.state.volume} className={this.state.showingVolume? 'videoPlayerVolume' : 'hidden'} onChange={this.changeVolume} />
          </div>
          <div className='videoPlayerControls'>
            <Input type='number' label='Step backward duration' name='backJump' min="1" value={this.state.backJump} onChange={this.setInput.bind(this, 'backJump')} className="videoPlayerOption" />
            <Input type='number' label='Step forward duration' name='frontJump' min="1" value={this.state.frontJump} onChange={this.setInput.bind(this, 'frontJump')} className="videoPlayerOption" />
            <Input type='number' step="0.1" label='Playback rate' name='playbackRate' min="0.1" value={this.state.playbackRate} onChange={this.setInput.bind(this, 'playbackRate')} className="videoPlayerOption" />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

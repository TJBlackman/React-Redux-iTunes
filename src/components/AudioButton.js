import React, { Component } from 'react'

export default class AudioButton extends Component {
  constructor(props){
    super(props);
    this.state = {playing: false}
  }

  togglePlaying = () => {
    this.setState({playing: !this.state.playing},() => {
      this.state.playing ? 
        this.refs.audio.play() :
        this.refs.audio.pause()
    });
  }

  render() {
    const { playing } = this.state; 
    const pause_btn = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"/></svg>;
    const play_btn  = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg>;
    const class_name = `audio-button ${playing ? "playing" : ""}`; 
    const icon = playing ? pause_btn : play_btn ; 

    return (
      <div>
          <button 
            className={class_name}
            type="button"
            onClick={this.togglePlaying}
          >
            {icon}
          </button>
          <audio src={this.props.audio} ref="audio" onEnded={this.togglePlaying}/>
      </div>
    )
  }
}


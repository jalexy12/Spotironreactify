var cx = React.addons.classSet;


var Track = React.createClass({
	getInitialState: function(){
		return({
			isPlaying: false
		})
	},

	playTrack: function(){
	  var playing = this.state.isPlaying ? false : true	
	  var audio = React.findDOMNode(this.refs.audio);

	  this.state.isPlaying ? audio.pause() : audio.play()
		this.setState({
			isPlaying: playing,
		})

	},
	getCurrentTime: function(){
	  var audio = React.findDOMNode(this.refs.audio);
	  var currentTime = audio.currentTime;

	  this.setState({
	  	currentTime: currentTime
	  })
	},
	render: function(){
		var buttonStyles = cx({
			'fa': true,
			'fa-play': !this.state.isPlaying,
			'fa-pause': this.state.isPlaying
		})

		return(
			<div>
			  <audio className="trackPlayer" ref="audio" src={this.props.data.preview_url}></audio>
				<div className="col-sm-4">
				    <h4>{this.props.data.name}</h4>
				 </div>
				 <div className="col-sm-1 playButton"><i onClick={this.playTrack} className={buttonStyles}></i></div> 
				<div className="col-sm-4 trackProgress">
				     <div className="progress">
		  				<div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="30">
		  				</div>
					  </div>
				  </div>
			</div>
			)
	}
})

var TrackList = React.createClass({
	getInitialState: function(){
		return({
			isShowing: this.props.showing
		})
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
	    isShowing: nextProps.showing
	  });
	},
	render: function(){
		var trackNodes = this.props.tracks.map(function(track, index){
			return <li className="row">
					  <div className="col-sm-2 trackIndex">
					    {index}.
					  </div>
					  <Track data={track} />
				   </li>
		
		})
		return(this.state.isShowing ? <ul className="list-unstyled">{trackNodes}</ul> : null)
	}
})


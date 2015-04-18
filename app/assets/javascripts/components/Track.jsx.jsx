var Track = React.createClass({

	render: function(){
		return(
			<div>
				<div className="col-sm-4">
				    <h4>{this.props.data.name}</h4>
				 </div>
				 <div className="col-sm-1 playButton"><i onClick={this.playTrack} className="fa fa-play"></i></div> 
				<div className="col-sm-4 trackProgress">
				     <div className="progress">
		  				<div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
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
						<audio src={track.preview_url}></audio>
					  <div className="col-sm-2 trackIndex">
					    {index}.
					  </div>
					  <Track data={track} />
				   </li>
		
		})
		return(this.state.isShowing ? <ul className="list-unstyled">{trackNodes}</ul> : null)
	}
})


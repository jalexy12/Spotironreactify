var Track = React.createClass({
	render: function(){
		return(
				<span>{this.props.name}</span>
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
		var trackNodes = this.props.tracks.map(function(track){
			return <li><Track name={track.name} /></li>
		
		})
		return(this.state.isShowing ? <ol>{trackNodes}</ol> : null)
	}
})
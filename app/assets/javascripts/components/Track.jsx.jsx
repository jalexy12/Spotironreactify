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
		var trackNodes = this.props.tracks.map(function(track, index){
			return <li className="row">
					  <div className="col-sm-2">
					    {index}.
					  </div>
					  <div className="col-sm-4">
					    <h4><Track name={track.name} /></h4>
					   </div> 
					   <div className="col-sm-2">
					     <small>Preview</small>
					    </div>
					   <div className="col-sm-4">
					    <progressBar value="0" max="30" />
					   </div>
				   </li>
		
		})
		return(this.state.isShowing ? <ul className="list-unstyled">{trackNodes}</ul> : null)
	}
})

progressBar = React.createClass({
	getInitialState: function(){
		return({
			val: this.props.value,
		    max: this.props.max
		})
	},

	componentWillReceiveProps: function(nextProps){
		this.setState({
			value: nextProps.val,
			max: nextProps.max
		})
	},
	render: function(){
		return (
			<div className="progress">
			  <div className="progress-bar" role="progressbar" valuenow={this.state.value} valuemax={this.state.max}>
			  </div>
			</div>)
	}
})
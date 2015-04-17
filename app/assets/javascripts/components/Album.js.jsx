var Album = React.createClass({
	render: function(){
		return(
			<div className="col-sm-4 text-center">
				<div className="row">{this.props.name}</div>
				<div className="row">{this.props.release}</div>
				<div className="row"><img className="artistimage" src={this.props.images[0].url} /></div>
			</div>
			)
	}
});
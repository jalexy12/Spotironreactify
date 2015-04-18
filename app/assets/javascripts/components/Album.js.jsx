 var cx = React.addons.classSet;
var Album = React.createClass({
	getInitialState: function(){
		return({
			artists: [],
			tracks: [],
			showingTracks: false

		})
	},
	componentDidMount: function(){
		$.get(this.props.link, this.handleAlbum);
	},
	handleAlbum: function(response){
		this.setState({
			artists: response.artists[0],
			tracks: response.tracks.items
		})
	},
	renderTracks: function(){
		if (this.state.showingTracks === false){
			this.setState({showingTracks: true})
		}else{
			this.setState({showingTracks: false})
		}
	},
	 handleShowModal: function() {
      this.refs.modal.show()
 	 },
 
	 handleExternalHide: function() {
	    this.refs.modal.hide()
	  },
	 
	handleDoingNothing: function() {
	    this.handleLog("Remember I said I'd do nothing? ...I lied!", 'danger')
	  },
	 
	// handleLog: function(message, type) {
	//     this.setState({
	//       logs: [{ type: type
	//              , time: new Date().toLocaleTimeString()
	//              , message: message}].concat(this.state.logs.slice(0, 3))
	//     })
	//   },

	render: function(){
	 var buttons = [
        {type: 'danger',  text: 'Hide Modal',  handler: this.handleExternalHide}
      , {type: 'primary', text: 'Do Nothing', handler: this.handleDoingNothing}
      ]
	  var classes = cx({
	    'text-center': true,
	    'row': true,
	    'tracks': true			
	  });
		var album = this.props.data;
		return(
			<div className="albumContainer">
				<div className="col-sm-4 text-center singleAlbum">
					<div className="row artistName">{this.state.artists.name}</div>
					<div className="row albumName">{album.name}</div>
					<div className="row">{album.release}</div>
					<div className="row"><img className="artistimage" src={album.images[0].url} /></div>
					<button className="btn btn-primary showtracks" onClick={this.handleShowModal}>Show da tracks</button>
				</div><br />
				<ExampleModal ref="modal"
			        show={false}
			        header="Example Modal"
			        buttons={buttons}>
				       <TrackList tracks={this.state.tracks} showing={true}/>
      			</ExampleModal>
			</div>
			)
	}
});


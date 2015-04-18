
var BASEURL = 'https://api.spotify.com/v1/search?type=album&query=';


var AlbumList = React.createClass({

	getAlbums: function(){
  		$.get(BASEURL + "comeback kid", this.handleAlbums);
	},
	handleAlbums: function(response){
		this.setState({
			data: response.albums.items
		})
	},
	getTracks: function(){
		$.ajax({
	      url: this.state.data.href,
	      success: function(data) {
      	    this.setState({
      	  	  artists: data.artists,
      	  	  tracks: data.tracks.items
      	 	 });
	      	}.bind(this),
	      error: function(xhr, status, err) {
	      	  console.error(this.props.url, status, err.toString());
	     	 }.bind(this)
    	});
	},

	getInitialState: function(){
		return({
			data: [],
		})
	},

	componentDidMount: function(){
		this.getAlbums();
	},

	render: function(){
		console.log(this.state.data)
		var albumList = this.state.data.map(function (album){
			return (
				<div><Album data={album} link={album.href} /></ div>
				)
		})
		return(
			<div> 
			  <div className="searchRow col-sm-4 col-sm-offset-5"><SearchBar /></div>
			  <div className="albumsRow row">{albumList}</div>
			</div>
			)
	}

});


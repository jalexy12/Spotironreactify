
var BASEURL = 'https://api.spotify.com/v1/search?type=album&query=';


var AlbumList = React.createClass({

	getAlbums: function(){
  		$.get(BASEURL + this.props.search, this.handleAlbums);
	},
	handleAlbums: function(response){
		this.setState({
			data: response.albums.items
		})
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
		var albums = this.state.data;
		var albumList = this.state.data.map(function (album){
			return (
				<div><Album data={album} albums={albums} link={album.href} /></ div>
				)
		})
		return(
			<div> 
			  <div className="albumsRow row">{albumList}</div>
			</div>
			)
	}

});


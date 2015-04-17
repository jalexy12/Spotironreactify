
var BASEURL = 'https://api.spotify.com/v1/search?type=album&query=';


var AlbumList = React.createClass({
	getAlbums: function(){
		$.ajax({
	      url: BASEURL + "comeback kid",
	      success: function(data) {
	      	  this.setState({data: data.albums.items});
	      	  console.log(this.state.data)
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
		console.log(data)
	},

	componentDidMount: function(){
		this.getAlbums();
	},

	render: function(){
		var stuff = this.state.data;
		albumList = stuff.map(function (album){
			return (
				<div><Album images={album.images} name={album.name} release={album.release} /></ div>
				)
		})
		return(
			<div> {albumList} </div>
			)
	}

});


import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '60%',
	height: '60%'
};

class EastEnd extends Component {
	state = {
		showingInfoWindow: false, //Hides or the shows the infoWindow
		activeMarker: {}, //Shows the active marker upon click
		selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
	};
	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};
	render() {
		return (
			<div className="campus-container">
				<h2> East End Campus</h2>
				<p>East End Flexible Learning Centre </p>
				<p> 2 Haghill Rd, Glasgow</p>
				<p> G31 3SR</p>

				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: 55.858139,
						lng: -4.202182
					}}
				>
					<Marker onClick={this.onMarkerClick} name={'Glasgow Kelvin College - East End Campus'} />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>
						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyAnxb_25UGxroEPdQ3lt8NIHIqvIGqiq0M'
})(EastEnd);

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '60%',
	height: '60%'
};

class Springburn extends Component {
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
				<h2> Springburn Campus</h2>
				<p>Springburn Library and Flexible Learning Centre </p>
				<p> 123 Flemington St, Glasgow </p>
				<p> G21 4TD</p>

				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: 55.880716,
						lng: -4.22922
					}}
				>
					<Marker onClick={this.onMarkerClick} name={'Glasgow Kelvin College - Springburn Campus'} />
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
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyDeOS2FQPOPxjhHXwdAB6Fn13oz1WoPiw0'
})(Springburn);

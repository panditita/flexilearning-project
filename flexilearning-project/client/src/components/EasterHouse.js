import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '60vw',
	height: '60vh'
};

class EasterHouse extends Component {
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
				<h2> Easterhouse Campus</h2>
				<p>Easterhouse Flexible Learning Centre </p>
				<p> 2 Haghill Rd, Glasgow</p>
				<p> G31 3SR</p>

				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: 55.868154,
						lng: -4.118672
					}}
				>
					<Marker onClick={this.onMarkerClick} name={'Glasgow Kelvin College - Easterhouse Campus'} />
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
	apiKey: 'AIzaSyAnxb_25UGxroEPdQ3lt8NIHIqvIGqiq0M'
})(EasterHouse);

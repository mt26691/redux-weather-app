import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="Celsius degree" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPA" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>);
    }

    render() {
        return (<table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (Celsius degree)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>);
    }

}

function mapStateToProps({weather}) {
    return { weather };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
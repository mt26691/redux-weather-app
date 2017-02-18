import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index';

class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>);
    }

    render() {
        return (<table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
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
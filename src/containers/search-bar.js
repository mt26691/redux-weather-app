import React, { Component } from 'react';

export default class SearchBard extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        let value = event.target.value;
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        //use api to fecth weather api
    }

    render() {
        return (<form onSubmit={this.onFormSubmit} className="input-group">
            <input type="text"
                placeholder="Get a five-day forcast in your city"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
            />
            <span className="input-group-btn">
                <input type="submit" className="btn btn-secondary" value="Submit" />
            </span>
        </form>);
    }

}
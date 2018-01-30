import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {companies: this.props.companies,removeSelected: true, locationValue: []}
  }
  handleChange = (value) => {
    this.setState({ locationValue: value });
    this.searchLocations(value);
  }

  searchLocations(locations)
  {
    let serachTerm = "";
    let searchData = [];
    serachTerm = locations.reduce((obj, location) => {
      obj.push(location.value);
      return obj;
    },[]);
    if(serachTerm.length > 0) {
      searchData = this.props.companies.filter(company => serachTerm.includes(company.location));
    }
    else {
      searchData = this.props.companies;
    }
    this.setState({companies: searchData})
  }

  render() {
    const { locationValue } = this.state;
    return (
      <div className="App">
        <div className="search-container">
        <Select
        name="locations"
        value={ locationValue }
        multi
        onChange={ this.handleChange }
        placeholder="Select your Location(s)"
        removeSelected={ this.state.removeSelected }
        options={ this.props.locations }
        />
        </div>
        <ul id="list">
          { this.state.companies.map(company =>
            <li key={company.id}>{company.name}-{company.location}</li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies,
  locations: state.locations
})

export default connect(mapStateToProps, null)(App)

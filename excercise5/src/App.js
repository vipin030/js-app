import React, { Component } from 'react';

import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
    ]
    this.state = {companies: this.companies, removeSelected: true,
    locationValue: [], locations: [
          { value: 'Seattle', label: 'Seattle' },
          { value: 'Cupertino', label: 'Cupertino' },
          { value: 'Menlo Park', label: 'Menlo Park' },
          { value: 'Mountain View', label: 'Mountain View' },
          { value: 'Sundsvall', label: 'Sundsvall' },
          { value: 'Palo Alto', label: 'Palo Alto' },
        ] }
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
      searchData = this.companies.filter(company => serachTerm.includes(company.location));
    }
    else {
      searchData = this.companies;
    }
    this.setState({companies: searchData})
    
  }

  render() {
    const { locationValue } = this.state;
    return (
      <div className="App">
        <div className="search-container">
        <Select
        name="form-field-name"
        value={ locationValue }
        multi
        onChange={ this.handleChange }
        placeholder="Select your Location(s)"
        removeSelected={ this.state.removeSelected }
        options={ this.state.locations }
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

export default App;

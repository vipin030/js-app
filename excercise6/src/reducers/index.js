import { combineReducers } from 'redux';

const initialState = {
	companies: [{id: 1, name: 'Amazon', location: 'Seattle'},
    	{id: 2, name: 'Apple', location: 'Cupertino'},
    	{id: 3, name: 'Facebook', location: 'Menlo Park'},
    	{id: 4, name: 'Google', location: 'Mountain View'},
    	{id: 5, name: 'Leeroy', location: 'Sundsvall'},
    	{id: 6, name: 'Tesla', location: 'Palo Alto'}
    ],
    locations: [{ value: 'Seattle', label: 'Seattle'},
        { value: 'Cupertino', label: 'Cupertino' },
        { value: 'Menlo Park', label: 'Menlo Park' },
        { value: 'Mountain View', label: 'Mountain View' },
        { value: 'Sundsvall', label: 'Sundsvall' },
        { value: 'Palo Alto', label: 'Palo Alto' }
    ]
}
export const companies = (state = initialState.companies, action) => {
	switch(action.type) {
		case 'GET_COMPANIES':
			return state
		default:
			return state
	}
}

export const locations = (state = initialState.locations, action) => {
	switch(action.type) {
		case 'GET_LOCATIONS':
			return state
		default:
			return state
	}
}

export default combineReducers({
	companies,
	locations
});
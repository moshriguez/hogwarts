import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Filter from './Filter';
import Sort from './Sort';
import PigIndex from './PigIndex';
import hogs from '../porkers_data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			hogs: hogs,
			filter: 'all',
      sort: 'none'
		};
	}

	setFilter = (value) => {
		this.setState({
			filter: value,
		});
	};

  setSort = (value) => {
		this.setState({
			sort: value,
		});
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Filter setFilter={this.setFilter} filter={this.state.filter}/>
        <Sort setSort={this.setSort} />
				<PigIndex hogs={this.state.hogs} filter={this.state.filter} sort={this.state.sort}/>
			</div>
		);
	}
}

export default App;

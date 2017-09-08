import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavigationComponent from './component/navigation/NavigationComponent';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavigationComponent />
			</BrowserRouter>
		);
	}
}

export default App;

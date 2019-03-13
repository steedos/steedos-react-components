import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";
import SteedosApp from './components/app';

class App extends Component {
  render() {
    return (
		<IconSettings iconPath="/assets/icons">
			<SteedosApp/>
		</IconSettings>
		);
  }
}

export default App;

import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";
import AppDemo from './components/app-demo';

class App extends Component {
  render() {
    return (
		<IconSettings iconPath="/assets/icons">
			<AppDemo/>
		</IconSettings>
		);
  }
}

export default App;

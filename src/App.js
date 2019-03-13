import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";
import SteedosGlobalHeader from './components/global-header';
import SteedosGlobalNavigationBar from './components/global-navigation-bar';

class App extends Component {
  render() {
    return (
		<IconSettings iconPath="/assets/icons">
			<SteedosGlobalHeader>
			</SteedosGlobalHeader>
			<SteedosGlobalNavigationBar/>
		</IconSettings>
		);
  }
}

export default App;

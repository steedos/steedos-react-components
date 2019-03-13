import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";

import SteedosGlobalHeader from "../global-header";
import SteedosNavigationBar from "../global-navigation-bar";

class SteedosApp extends Component {
  render() {
	return (
			<IconSettings iconPath="/assets/icons">
				<SteedosGlobalHeader/>
				<SteedosNavigationBar/>
			</IconSettings>
		);
  }
}

export default SteedosApp;

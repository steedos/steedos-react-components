import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";

import GlobalHeader from "../global-header";
import NavigationBar from "../global-navigation-bar";

class AppDemo extends Component {
  render() {
	return (
			<IconSettings iconPath="/assets/icons">
				<GlobalHeader/>
				<NavigationBar/>
			</IconSettings>
		);
  }
}

export default AppDemo;

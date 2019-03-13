import React, { Component } from 'react';
import { IconSettings } from "@salesforce/design-system-react";

import GlobalHeader from "../global-header";

class AppDemo extends Component {
  render() {
	return (
			<IconSettings iconPath="/assets/icons">
				<GlobalHeader/>
			</IconSettings>
		);
  }
}

export default AppDemo;

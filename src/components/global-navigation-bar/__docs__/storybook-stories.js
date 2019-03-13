import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconSettings,Textarea } from  '@salesforce/design-system-react';
import SteedosGlobalNavigationBar from '..';

storiesOf("SteedosGlobalNavigationBar", module)
	.addDecorator((getStory) => (
		<div className="slds-p-around_medium">
			<IconSettings iconPath="/assets/icons">{getStory()}</IconSettings>
		</div>
	))
	.add('Standard', () => (
		<SteedosGlobalNavigationBar/>
	))
import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconSettings } from  '@salesforce/design-system-react';
import SteedosApp from '..';

storiesOf("SteedosApp", module)
	.addDecorator((getStory) => (
		<div id="app">
			{getStory()}
		</div>
	))
	.add('Standard', () => (
		<SteedosApp/>
	))
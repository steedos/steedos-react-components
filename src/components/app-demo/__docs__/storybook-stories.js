import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconSettings } from  '@salesforce/design-system-react';
import AppDemo from '..';

storiesOf("AppDemo", module)
	.addDecorator((getStory) => (
		<div id="app">
			{getStory()}
		</div>
	))
	.add('Standard', () => (
		<AppDemo/>
	))
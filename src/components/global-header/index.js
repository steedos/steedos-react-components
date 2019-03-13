import React, { Component } from 'react';
import { GlobalHeader,GlobalHeaderSearch,GlobalHeaderButton,GlobalHeaderDropdown,GlobalHeaderProfile } from '@salesforce/design-system-react';
import GlobalNavigationBar from "../global-navigation-bar";

class SteedosGlobalHeader extends Component {
  render() {
    return (
			<GlobalHeader
				logoSrc="/assets/images/logo.svg" 
				navigation={
					<GlobalNavigationBar/>
				}
				onSkipToContent={() => {
					console.log('>>> Skip to Content Clicked');
				}}
				onSkipToNav={() => {
					console.log('>>> Skip to Nav Clicked');
				}}
			>
				<GlobalHeaderSearch
					placeholder="Search Salesforce"
					onSelect={() => {
						console.log('>>> onSelect');
					}}
					options={[{ label: 'Email' }, { label: 'Mobile' }]}
				/>
				<GlobalHeaderButton
					className="slds-m-right_small"
					iconVariant={null}
					label="Feedback"
					onClick={() => {
						console.log('>>> onClick');
					}}
					variant="neutral"
				/>
				<GlobalHeaderDropdown
					assistiveText={{ icon: 'Global Actions' }}
					id="global-header-dropdown-example"
					iconCategory="utility"
					iconName="add"
					onSelect={() => {
						console.log('>>> onSelect');
					}}
					options={[{ label: 'New Note' }, { label: 'Log a Call' }]}
				/>
				<GlobalHeaderButton
					assistiveText={{ icon: 'Help and Training' }}
					iconCategory="utility"
					iconName="question"
					onClick={() => {
						console.log('>>> onClick');
					}}
				/>
				<GlobalHeaderButton
					assistiveText={{ icon: 'Setup' }}
					iconCategory="utility"
					iconName="settings"
					onClick={() => {
						console.log('>>> onClick');
					}}
				/>
				<GlobalHeaderProfile
					avatar="/assets/images/avatar2.jpg"
					id="global-header-profile-example"
					onClick={() => {
						console.log('>>> onClick');
					}}
					onSelect={() => {
						console.log('>>> onSelect');
					}}
					options={[{ label: 'Profile Menu' }]}
				/>
			</GlobalHeader>
		);
  }
}

export default SteedosGlobalHeader;

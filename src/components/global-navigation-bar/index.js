import React, { Component } from 'react';
import { GlobalNavigationBar,GlobalNavigationBarRegion,GlobalNavigationBarLink,GlobalNavigationBarDropdown } from '@salesforce/design-system-react';
import { AppLauncher,AppLauncherSection,AppLauncherTile } from '@salesforce/design-system-react';
import { Button, Icon  } from '@salesforce/design-system-react';

class SteedosGlobalNavigationBar extends Component {
    render() {
		const dropdownCollection = [
			{
				label: 'Menu Item One',
				value: '1',
				iconCategory: 'utility',
				iconName: 'table',
				href: 'http://www.google.com',
			},
			{
				label: 'Menu Item Two',
				value: '2',
				iconCategory: 'utility',
				iconName: 'kanban',
				href: 'http://www.google.com',
			},
			{
				label: 'Menu Item Three',
				value: '3',
				iconCategory: 'utility',
				iconName: 'side_list',
				href: 'http://www.google.com',
			},
		];

		return (
				<GlobalNavigationBar>
					<GlobalNavigationBarRegion region="primary">
						<AppLauncher
							triggerName="App Name"
							modalHeaderButton={<Button label="App Exchange" />}
						>
							<AppLauncherSection title="Tile Section">
								<AppLauncherTile
									title="Marketing Cloud"
									iconText="MC"
									description="Send emails, track emails, read emails! Emails!"
								/>
								<AppLauncherTile
									title="Call Center"
									description="The key to call center and contact center is not to use too many words!"
									descriptionHeading="Call Center"
									iconText="CC"
								/>
							</AppLauncherSection>
							<AppLauncherSection title="Small Tile Section">
								<AppLauncherTile
									title="Journey Builder"
									iconText="JB"
									size="small"
								/>
								<AppLauncherTile
									title="Sales Cloud"
									iconNode={
										<Icon name="campaign" category="standard" size="large" />
									}
									size="small"
								/>
							</AppLauncherSection>
						</AppLauncher>
					</GlobalNavigationBarRegion>
					<GlobalNavigationBarRegion region="secondary" navigation>
						<GlobalNavigationBarLink
							href="javascript:void(0);"
							label="Home"
							id="home-link"
						/>
						<GlobalNavigationBarDropdown
							id="primaryDropdown"
							assistiveText={{ icon: 'Context Menu Item 1' }}
							label="Context Menu Item"
							options={dropdownCollection}
						/>
						<GlobalNavigationBarLink
							href="javascript:void(0);"
							label="Context Menu Item 2"
							active
						/>
					</GlobalNavigationBarRegion>
					<GlobalNavigationBarRegion region="tertiary">
						<GlobalNavigationBarLink
							href="javascript:void(0);"
							label="Actions"
						/>
					</GlobalNavigationBarRegion>
				</GlobalNavigationBar>
		);
	}
}

export default SteedosGlobalNavigationBar;

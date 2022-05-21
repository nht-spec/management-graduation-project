import { Tabs } from 'antd';
import React from 'react';

export default function TabPanel(props) {
	const { content, tabpanel, OperationsSlot, onChange } = props;
	const { TabPane } = Tabs;

	return (
		<Tabs
			onChange={onChange}
			defaultActiveKey={tabpanel[0]?._id}
			type='card'
			tabBarExtraContent={OperationsSlot}
		>
			{tabpanel?.map((tab) => (
				<TabPane tab={tab.name} key={tab._id}>
					{content}
				</TabPane>
			))}
		</Tabs>
	);
}

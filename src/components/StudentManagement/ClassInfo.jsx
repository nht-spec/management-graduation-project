import React, { useEffect } from 'react';
import useGetClass from '../../hooks/useGetClass';
import useSocket from '../../hooks/useSocket';
import Loading from '../Shared/Loading';
import TabPanel from '../Shared/TabPanel';
import ClassAction from './ClassAction';

export default function ClassInfo({ defaultActiveClassId, activeClassId }) {
	const { socket } = useSocket();
	const { loading, classList } = useGetClass(socket);

	const OperationsSlot = {
		right: <ClassAction loading={loading} classList={classList} />,
	};

	const onChange = (activeKey) => {
		if (activeClassId) {
			activeClassId && activeClassId(activeKey);
		}
	};

	useEffect(() => {
		if (defaultActiveClassId) {
			defaultActiveClassId && defaultActiveClassId(classList[0]?._id);
		}
	}, [classList]);

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<TabPanel
				tabpanel={classList}
				OperationsSlot={OperationsSlot}
				onChange={onChange}
			/>
		</>
	);
}

import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import classApi from '../api/classApi';

function useGetClass(socket) {
	const [loading, setLoading] = useState(false);
	const [classList, setclassList] = useState([]);
	const [updateclass, setUpdateclass] = useState(null);

	useEffect(() => {
		socket?.on('updateClass', (data) => {
			setUpdateclass(data);
		});
	}, [socket]);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const result = await classApi.get();
				setclassList(result.data);
			} catch (err) {
				message.error(`${err}`);
			}
			setLoading(false);
		})();
	}, [updateclass]);

	return {
		loading,
		classList,
	};
}

export default useGetClass;

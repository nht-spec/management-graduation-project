import { message } from 'antd';
import { useEffect, useState } from 'react';

import classApi from '../api/classApi';

function useGetClassName(socket) {
	const [loading, setLoading] = useState(false);
	const [classList, setClassList] = useState([]);
	const [updateClass, setUpdateClass] = useState(null);
	useEffect(() => {
		socket?.on('updateClass', (data) => {
			setUpdateClass(data);
		});
	}, [socket]);

	useEffect(async () => {
		try {
			setLoading(true);
			const result = await classApi.get();

			setClassList(result.data);
		} catch (err) {
			message.error(`${err}`);
		}
		setLoading(false);
	}, [updateClass]);

	return {
		loading,
		classList,
	};
}

export default useGetClassName;

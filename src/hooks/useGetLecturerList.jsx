import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import lecturerApi from '../api/lecturerApi';

function useGetLecturerList(socket, current, pageSize) {
	const [loading, setLoading] = useState(false);
	const [lecturerList, setLecturerList] = useState(null);
	const [updateLecturer, setUpdateLecturer] = useState(null);

	useEffect(() => {
		socket?.on('updateLecturer', (data) => {
			setUpdateLecturer(data);
		});
	}, [socket]);

	useEffect(async () => {
		try {
			setLoading(true);
			const result = await lecturerApi.get({ page: current, limit: pageSize });

			setLecturerList(result.data);
		} catch (err) {
			message.error(`${err}`);
		}
		setLoading(false);
	}, [updateLecturer, current, pageSize]);

	return {
		loading,
		lecturerList,
	};
}

export default useGetLecturerList;

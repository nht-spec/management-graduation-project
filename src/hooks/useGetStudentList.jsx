import React, { useEffect, useState } from 'react';
import studentApi from '../api/studentApi';

function useGetStudentList(socket, current, pageSize) {
	const [loading, setLoading] = useState(false);
	const [studentList, setStudentList] = useState(null);
	const [updateStudent, setUpdateStudent] = useState(null);

	// useEffect(() => {
	// 	socket?.on('updateStudent', (data) => {
	// 		setUpdateStudent(data);
	// 	});
	// }, [socket]);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await studentApi.get({ page: current, limit: pageSize });
			setStudentList(result.data);
			// setUpdateStudent(null);
			setLoading(false);
		})();
	}, [updateStudent, current, pageSize]);

	return { updateStudent, loading, studentList };
}

export default useGetStudentList;

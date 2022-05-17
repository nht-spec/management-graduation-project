import { useEffect, useState } from 'react';
import studentApi from '../api/studentApi';

function useGetStudentIdList(socket) {
	const [studentIdList, setStudentIdList] = useState(null);

	const [updateStudent, setUpdateStudent] = useState(null);

	useEffect(() => {
		socket?.on('updateStudent', (data) => {
			setUpdateStudent(data);
		});
	}, [socket]);

	useEffect(() => {
		(async () => {
			const result = await studentApi.getStudentIdList();
			setStudentIdList(result.data);
		})();
	}, [updateStudent]);

	return { studentIdList };
}

export default useGetStudentIdList;

import { useEffect, useState } from 'react';
import timeSpecializedApi from '../api/timeSpecializedApi';

function useGetTimeSpecialized(socket) {
	const [loading, setLoading] = useState(false);
	const [timeData, setTimeData] = useState([]);
	const [updateTime, setUpdateTime] = useState(null);

	useEffect(() => {
		socket?.on('updatetimespecialized', (data) => {
			setUpdateTime(data);
		});
	}, [socket]);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await timeSpecializedApi.get();
			setTimeData(result.data);
		})();
		setLoading(false);
	}, [updateTime]);

	return { loading, timeData };
}

export default useGetTimeSpecialized;

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { API_KEYS } from '../constants/api-key';

export default function useSocket(props) {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		setSocket(io(`${API_KEYS.BASE_URL}`));
	}, []);

	return {
		socket,
	};
}

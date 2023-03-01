/* eslint-disable react-hooks/exhaustive-deps */
import { authService } from 'library/api/authService';
import { useEffect } from 'react';
import { useAppDispatch } from './reduxTypedHooks';
import { useHistory } from 'react-router-dom';
import { clearUserData } from 'library/redux/users';
import { clearCart } from 'library/redux/cart';
import { clearShop } from 'library/redux/shop';
import { clearStatistics } from 'library/redux/statistics';
import { resetEvents, setSelectedTab } from 'library/redux/events';
import { clearNotifications } from 'library/redux/notifications';
import { getModules } from 'library/redux/common';
import { clearCookie } from 'setupCookie';

const useClearCookie = () => {
	const { push } = useHistory();
	const dispatch = useAppDispatch();

	const clearAppData = () => {
		dispatch(clearUserData());
		dispatch(clearCart());
		dispatch(clearShop());
		dispatch(clearStatistics());
		dispatch(resetEvents());
		dispatch(clearNotifications());
		dispatch(setSelectedTab('Все'));
	};

	// таже логика, что и при выходе из акк
	const logout = async () => {
		try {
			await authService.logout();
			clearCookie();
			push('/');
		} catch (error) {}
		dispatch(getModules());
		clearAppData();
	};

	const checkCookie = (function () {
		let lastCookie = document.cookie;
		return function () {
			let currentCookie = document.cookie;
			if (currentCookie !== lastCookie) {
				let token = currentCookie.includes(' token=');
				// идёт привязка конкретно к токену, тк именно с ним может, что то случиться/произойти
				if (!token) {
					logout();
				}
				lastCookie = currentCookie;
			}
		};
	})();

	useEffect(() => {
		const idInterval = setInterval(checkCookie, 1000);
		return () => {
			clearInterval(idInterval);
		};
	}, []);
};

export default useClearCookie;

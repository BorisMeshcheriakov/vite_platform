import { useCallback } from 'react';

const useClickAway = (handler: any) => {
	const refTarget = useCallback((node) => node && node.focus(), []); // авто фокус на элементе
	const handleTarget = (event: any) => {
		!event.currentTarget.contains(event.relatedTarget) && handler();
	};

	return { refTarget, handleTarget };
};

export default useClickAway;

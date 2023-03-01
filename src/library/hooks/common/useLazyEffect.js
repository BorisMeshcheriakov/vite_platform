import React, { useRef, useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';

const useLazyEffect = (effect, deps = [], wait = 300) => {
	const cleanUp = useRef();
	const effectRef = useRef();
	const updatedEffect = useCallback(effect, deps);
	effectRef.current = updatedEffect;
	const lazyEffect = useCallback(
		debounce(() => {
			cleanUp.current = effectRef.current();
		}, wait),
		[]
	);
	useEffect(lazyEffect, deps);
	useEffect(() => {
		return () => (typeof cleanUp.current == 'function' ? cleanUp.current() : null);
	}, []);
};

export default useLazyEffect;

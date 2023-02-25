import React from 'react';

import st from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
	return (
		<button className={st.btn} {...props}>
			{children}
		</button>
	);
};

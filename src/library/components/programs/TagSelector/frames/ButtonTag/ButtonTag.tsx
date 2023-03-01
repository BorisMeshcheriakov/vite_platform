import { Tag } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import cn from 'classnames';

import st from './ButtonTag.module.scss';

type Props = {
	id: string;
	onClick: () => void;
	error: boolean;
	children?: ReactNode;
};

const ButtonTag: React.FC<Props> = ({ id, onClick, error, children }) => {
	return (
		<div className={cn(st.button, error && st.error)} id={id} onClick={onClick}>
			<Tag />
			<span>Теги</span>
			{children}
		</div>
	);
};

export default ButtonTag;

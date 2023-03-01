import React from 'react';

import {
	Badge,
	MenuItem,
	Select,
	Input,
	FormControl,
	Checkbox,
	ListItemText,
	SelectChangeEvent,
} from '@mui/material';

import { ButtonTag } from './frames';
import { VideoTag } from 'library/models/programs';

interface Props {
	value: number[];
	onChange: any;
	error: boolean;
	tags: VideoTag[];
}

const TagSelector: React.FC<Props> = ({ value = [], onChange, error, tags }) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleChange = (e: SelectChangeEvent<number[]>) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<FormControl>
				<Badge badgeContent={value.length} color="primary">
					<ButtonTag id="openMenu" onClick={() => setIsOpen(!isOpen)} error={error}></ButtonTag>
				</Badge>
				<Select
					value={value}
					multiple
					open={isOpen}
					input={<Input id="select-multiple-checkbox" />}
					style={{ display: 'none' }}
					onClose={handleClose}
					onChange={handleChange}
					MenuProps={{
						anchorEl: document.getElementById('openMenu'),
					}}
				>
					{tags.map((tag) => (
						<MenuItem key={tag.id} value={tag.id}>
							<Checkbox checked={value.indexOf(tag.id) > -1} />
							<ListItemText primary={tag.title} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default TagSelector;

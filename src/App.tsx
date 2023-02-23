import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';

function App() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={1}>
				<Button variant="outlined">Test</Button>
			</Grid>
			<Grid item xs={1}>
				<IconButton>
					<Add />
				</IconButton>
			</Grid>
			<Grid item xs={1}></Grid>
			<Grid item xs={1}></Grid>
		</Grid>
	);
}

export default App;

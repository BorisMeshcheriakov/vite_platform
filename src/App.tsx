import { Button } from './components/Button';

import st from './App.module.scss';

function App() {
	return (
		<div className={st.app}>
			<section className={st.row}>
				<h2>Buttons</h2>
				<div className={st.container}>
					<Button>test</Button>
				</div>
			</section>
		</div>
	);
}

export default App;

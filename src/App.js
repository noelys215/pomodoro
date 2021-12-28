import Controllers from './components/Controllers';
import CountdownAnimation from './components/CountdownAnimation';
import { ReactComponent as Logo } from './assets/logo.svg';
import Config from '../src/components/Config';
import Modal from './components/Modal';

const App = () => {
	return (
		<div className="container">
			<Logo className="logo" />
			<Controllers />
			<CountdownAnimation />
			<Config />
			<Modal />
		</div>
	);
};

export default App;

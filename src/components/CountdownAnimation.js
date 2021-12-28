import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useGlobalContext } from '../context/SettingsContext';
import Clock from './Clock';

const CountdownAnimation = () => {
	const {
		actionText,
		setClockStatus,
		setActionText,
		setSecondsRemaining,
		selectedController,
		pomodoroTime,
		shortBreak,
		longBreak,
		secondsRemaining,
		progressBarPercentage,
	} = useGlobalContext();

	const handleAction = () => {
		if (actionText === 'START') {
			setClockStatus('Started');
			setActionText('PAUSE');
		} else if (actionText === 'PAUSE') {
			setClockStatus('Stopped');
			setActionText('START');
		} else if (actionText === 'RESTART') {
			setClockStatus('Stopped');
			if (selectedController === 'pomodoro') {
				setSecondsRemaining(pomodoroTime * 60);
			} else if (selectedController === 'short break') {
				setSecondsRemaining(shortBreak * 60);
			} else if (selectedController === 'long break') {
				setSecondsRemaining(longBreak * 60);
			}
			setActionText('START');
		}
	};

	return (
		<>
			<button
				className={`${actionText} action-text-div`}
				id={actionText}
				style={{ fontFamily: 'Roboto Slab' }}
				onClick={() => handleAction()}>
				{actionText}
			</button>
			<div className="main-div-timer">
				<div className="second-circle">
					<div className="progress-bar">
						<CircularProgressbarWithChildren
							value={((secondsRemaining / progressBarPercentage) * 100).toFixed(1)}
							strokeWidth={4}
							role="figure"
							styles={{
								path: {
									stroke: '#adf182',
								},
								trail: {
									stroke: 'transparent',
								},
							}}>
							<div
								className="div-timer"
								style={{
									fontFamily: 'Roboto Slab',
									fontStyle: 'normal',
									fontWeight: 'bold',
									fontSize: 0,
									textAlign: 'center',
									letterSpacing: 0,
									color: '#D7E0FF',
									marginTop: 0,
								}}>
								<Clock />
							</div>
						</CircularProgressbarWithChildren>
					</div>
				</div>
			</div>
		</>
	);
};

export default CountdownAnimation;

import { useGlobalContext } from '../context/SettingsContext';

const Controllers = () => {
	const {
		selectedController,
		setSelectedController,
		setSecondsRemaining,
		pomodoroTime,
		shortBreak,
		longBreak,
		setClockStatus,
		setActionText,
		setProgressBarPercentage,
	} = useGlobalContext();

	const changeControllerAndTime = (controllerName) => {
		setSelectedController(controllerName);
		if (controllerName === 'pomodoro') {
			setSecondsRemaining(pomodoroTime * 60);
			setProgressBarPercentage(pomodoroTime * 60);
		} else if (controllerName === 'short break') {
			setSecondsRemaining(shortBreak * 60);
			setProgressBarPercentage(shortBreak * 60);
		} else if (controllerName === 'long break') {
			setSecondsRemaining(longBreak * 60);
			setProgressBarPercentage(longBreak * 60);
		}
		setClockStatus('Stopped');
		setActionText('START');
	};

	return (
		<div className={`controllers-div`} role="group">
			<button
				className={selectedController === 'pomodoro' ? 'button-selected' : ''}
				onClick={() => changeControllerAndTime('pomodoro')}
				role="application">
				pomodoro
			</button>
			<button
				className={selectedController === 'short break' ? 'button-selected' : ''}
				onClick={() => changeControllerAndTime('short break')}
				role="application">
				short break
			</button>
			<button
				className={selectedController === 'long break' ? 'button-selected' : ''}
				onClick={() => changeControllerAndTime('long break')}
				role="application">
				long break
			</button>
		</div>
	);
};

export default Controllers;

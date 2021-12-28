import { createContext, useState, useContext } from 'react';

const SettingContext = createContext();

const SettingsContextProvider = ({ children }) => {
	const [selectedController, setSelectedController] = useState('pomodoro');

	const [pomodoroTime, setPomodoroTime] = useState(30);
	const [longBreak, setLongBreak] = useState(15);
	const [shortBreak, setShortBreak] = useState(5);

	const [actionText, setActionText] = useState('START');
	const [clockStatus, setClockStatus] = useState('Stopped');

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [secondsRemaining, setSecondsRemaining] = useState(1800);
	const [progressBarPercentage, setProgressBarPercentage] = useState(1800);

	return (
		<SettingContext.Provider
			value={{
				selectedController,
				setSelectedController,
				actionText,
				pomodoroTime,
				setPomodoroTime,
				clockStatus,
				setClockStatus,
				setActionText,
				secondsRemaining,
				setSecondsRemaining,
				progressBarPercentage,
				setProgressBarPercentage,
				longBreak,
				shortBreak,
				isModalOpen,
				setIsModalOpen,
				setShortBreak,
				setLongBreak,
			}}>
			{children}
		</SettingContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(SettingContext);
};

export { SettingsContextProvider, useGlobalContext };

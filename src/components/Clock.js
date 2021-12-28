import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/SettingsContext';
import useSound from 'use-sound';
import zelda from '../sounds/zelda.mp3';

const Clock = () => {
	const { clockStatus, setClockStatus, setActionText, secondsRemaining, setSecondsRemaining } =
		useGlobalContext();

	const secondsToDisplay = secondsRemaining % 60;
	const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
	const minutesToDisplay = minutesRemaining % 60;
	const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

	const [play] = useSound(zelda, { volume: 0.25 });

	useEffect(() => {
		if (
			twoDigits(minutesToDisplay) === '00' &&
			twoDigits(secondsToDisplay) === '00' &&
			hoursToDisplay !== 1
		) {
			setActionText('RESTART');
			// sound
			play();
		}
	});

	useInterval(
		() => {
			if (secondsRemaining > 0) {
				setSecondsRemaining(secondsRemaining - 1);
			} else {
				setClockStatus('Stopped');
			}
		},
		clockStatus === 'Started' ? 1000 : null
		// passing null stops the interval
	);

	if (hoursToDisplay === 1) {
		return <h1>60:00</h1>;
	} else {
		return (
			<>
				<h1>
					{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
				</h1>
			</>
		);
	}
};

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
const twoDigits = (num) => String(num).padStart(2, '0');

export default Clock;

import { useGlobalContext } from '../context/SettingsContext';
import iconClose from '../assets/icon-close.svg';
import arrowUp from '../assets/icon-arrow-up.svg';
import arrowDown from '../assets/icon-arrow-down.svg';

const Modal = () => {
	const {
		isModalOpen,
		setIsModalOpen,
		selectedFont,
		pomodoroTime,
		shortBreak,
		longBreak,
		setPomodoroTime,
		setShortBreak,
		setLongBreak,
		selectedController,
		setSecondsRemaining,
		setClockStatus,
		setActionText,
		setProgressBarPercentage,
	} = useGlobalContext();

	const applyTimesAndCloseModal = () => {
		if (selectedController === 'pomodoro') {
			setSecondsRemaining(pomodoroTime * 60);
			setProgressBarPercentage(pomodoroTime * 60);
		} else if (selectedController === 'short break') {
			setSecondsRemaining(shortBreak * 60);
			setProgressBarPercentage(shortBreak * 60);
		} else if (selectedController === 'long break') {
			setSecondsRemaining(longBreak * 60);
			setProgressBarPercentage(longBreak * 60);
		}
		setClockStatus('Stopped');
		setActionText('START');
		setIsModalOpen(false);
	};

	return (
		<div
			className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
			onClick={() => setIsModalOpen(false)}>
			<main className="modal-container" onClick={(e) => e.stopPropagation()}>
				<header className="header-modal">
					<h2 style={{ fontFamily: selectedFont }}>Settings</h2>
					<img
						className="closing-icon"
						src={iconClose}
						onClick={() => {
							setIsModalOpen(false);
						}}
						alt="closing-icon"
					/>
				</header>

				<section>
					<div className="main-div-modal">
						<p
							style={{ fontFamily: selectedFont }}
							className="subtitle-modal main-title">
							TIME (MINUTES)
						</p>
						<div className="div-controllers-modal" style={{ fontFamily: selectedFont }}>
							<div>
								<h5>pomodoro</h5>
								<input
									className="input-number-modal"
									type="number"
									min="1"
									max="60"
									value={pomodoroTime}
									style={{ fontFamily: selectedFont }}
									readOnly
								/>
								<div className="arrows-input-div">
									<img
										className={pomodoroTime === 60 ? 'dissapear' : ''}
										src={arrowUp}
										alt="arrow-up"
										onClick={() => setPomodoroTime(pomodoroTime + 5)}
									/>
									<img
										className={pomodoroTime === 1 ? 'dissapear' : ''}
										src={arrowDown}
										alt="arrow-down"
										onClick={() => setPomodoroTime(pomodoroTime - 5)}
									/>
								</div>
							</div>
							<div>
								<h5>short break</h5>
								<input
									className="input-number-modal"
									type="number"
									min="1"
									max="99"
									step="1"
									value={shortBreak}
									style={{ fontFamily: selectedFont }}
									readOnly
								/>
								<div className="arrows-input-div">
									<img
										className={shortBreak === 60 ? 'dissapear' : ''}
										src={arrowUp}
										alt="arrow-up"
										onClick={() => setShortBreak(shortBreak + 1)}
									/>
									<img
										className={shortBreak === 1 ? 'dissapear' : ''}
										src={arrowDown}
										alt="arrow-down"
										onClick={() => setShortBreak(shortBreak - 1)}
									/>
								</div>
							</div>
							<div>
								<h5>long break</h5>
								<input
									className="input-number-modal"
									type="number"
									min="1"
									max="99"
									step="1"
									value={longBreak}
									style={{ fontFamily: selectedFont }}
									readOnly
								/>
								<div className="arrows-input-div">
									<img
										className={longBreak === 60 ? 'dissapear' : ''}
										src={arrowUp}
										alt="arrow-up"
										onClick={() => setLongBreak(longBreak + 1)}
									/>
									<img
										className={longBreak === 1 ? 'dissapear' : ''}
										src={arrowDown}
										alt="arrow-down"
										onClick={() => setLongBreak(longBreak - 1)}
									/>
								</div>
							</div>
						</div>
					</div>
					<button className="apply-button" onClick={() => applyTimesAndCloseModal()}>
						Apply
					</button>
				</section>
			</main>
		</div>
	);
};

export default Modal;

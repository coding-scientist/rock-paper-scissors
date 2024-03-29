import { FC, useContext, useEffect } from 'react';
import BonusGame from './components/BonusGame';
import OriginalGame from './components/OriginalGame';
import Scoreboard from './components/Scoreboard';
import { originalPlays } from './enums/originalPlays';
import { playerTypes } from './enums/playerTypes';
import determineRoundWinner from './helpers/determineRoundWinner';
import { globalContext } from './context/GlobalContext';
import RulesModal from './components/RulesModal';
import rules_backgroundImageOriginal from './assets/images/image-rules.svg';
import rules_backgroundImageBonus from './assets/images/image-rules-bonus.svg'

const App: FC = () => {
	const {
		score,
		hasBeenClicked,
		userPlay,
		computerPlay,
		setComputerPlay,
		setScore,
		isPlayingOriginalGame,
		modalIsOpen,
		setModalIsOpen,
	} = useContext(globalContext);

	useEffect(() => {
		setRandomComputerPlay();
		const winner = determineRoundWinner(userPlay, computerPlay);
		adjustPoints(winner);
	}, [hasBeenClicked]);

	const setRandomComputerPlay = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		const computerPlayOptions = [
			originalPlays.ROCK,
			originalPlays.PAPER,
			originalPlays.SCISSORS,
		];
		const randomComputerPlay = computerPlayOptions[randomNumber];
		setComputerPlay(randomComputerPlay);
	};

	const adjustPoints = (winner: playerTypes) => {
		if (winner === playerTypes.USER) {
			setScore(prevScore => prevScore + 1);
		} else if (winner === playerTypes.COMPUTER) {
			setScore(prevScore => prevScore - 1);
		}
	};

	return (
		<main className='main-container'>
			<Scoreboard score={score} />
			{isPlayingOriginalGame ? <OriginalGame /> : <BonusGame />}
			<button
				className='show-rules-modal-btn'
				onClick={() => setModalIsOpen(prevState => !prevState)}
			>
				Rules
			</button>
			{modalIsOpen && (
				<RulesModal
					backGroundImage={
						isPlayingOriginalGame ? rules_backgroundImageOriginal : rules_backgroundImageBonus
					}
				/>
			)}
		</main>
	);
};

export default App;

import {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import BonusGame from './components/BonusGame';
import OriginalGame from './components/OriginalGame';
import Scoreboard from './components/Scoreboard';
import { Player } from './enums/Player';
import { Plays } from './enums/Plays';
import determineRoundWinner from './helpers/determineRoundWinner';

interface UserPlayContext {
	setUserPlay: Dispatch<SetStateAction<Plays>>;
	setHasBeenClicked: Dispatch<SetStateAction<boolean>>;
}

export const userPlayContext = createContext<UserPlayContext>({} as UserPlayContext);

const App: FC = () => {
	const [score, setScore] = useState(0);
	const [isPlayingOriginalGame, setIsPlayingOriginalGame] = useState(true);
	const [userPlay, setUserPlay] = useState<Plays>(Plays.NONE);
	const [computerPlay, setComputerPlay] = useState<Plays>(Plays.NONE);
	const [hasBeenClicked, setHasBeenClicked] = useState(false);

	useEffect(() => {
		setRandomComputerPlay();
		adjustPoints(determineRoundWinner(userPlay, computerPlay));
	}, [hasBeenClicked]);

	const setRandomComputerPlay = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		const randomComputerPlay = [Plays.ROCK, Plays.PAPER, Plays.SCISSORS][
			randomNumber
		];
		setComputerPlay(randomComputerPlay);
	};

	const adjustPoints = (winner: Player) => {
		if (winner === Player.USER) {
			setScore(prevScore => prevScore + 1);
		} else if (winner === Player.COMPUTER) {
			setScore(prevScore => prevScore - 1);
		}
	};

	return (
		<userPlayContext.Provider value={{ setUserPlay, setHasBeenClicked }}>
			<main className='main-container'>
				<Scoreboard score={score} />
				{isPlayingOriginalGame ? <OriginalGame /> : <BonusGame />}
			</main>
		</userPlayContext.Provider>
	);
};

export default App;

import {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { originalPlays } from '../enums/originalPlays';

type Props = {
	children: ReactNode;
};

interface contextInterface {
	score: number;
	setScore: Dispatch<SetStateAction<number>>;
	isPlayingOriginalGame: boolean;
	setIsPlayingOriginalGame: Dispatch<SetStateAction<boolean>>;
	userPlay: originalPlays;
	setUserPlay: Dispatch<SetStateAction<originalPlays>>;
	computerPlay: originalPlays;
	setComputerPlay: Dispatch<SetStateAction<originalPlays>>;
	hasBeenClicked: boolean;
	setHasBeenClicked: Dispatch<SetStateAction<boolean>>;
	modalIsOpen: boolean;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const globalContext = createContext<contextInterface>(
	{} as contextInterface
);

const GlobalContextProvider: FC<Props> = ({ children }) => {
	const [score, setScore] = useState(0);
	const [isPlayingOriginalGame, setIsPlayingOriginalGame] = useState(true);
	const [userPlay, setUserPlay] = useState<originalPlays>(originalPlays.NONE);
	const [computerPlay, setComputerPlay] = useState<originalPlays>(
		originalPlays.NONE
	);
	const [hasBeenClicked, setHasBeenClicked] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(true);

	const context: contextInterface = {
		score,
		setScore,
		isPlayingOriginalGame,
		setIsPlayingOriginalGame,
		userPlay,
		setUserPlay,
		computerPlay,
		setComputerPlay,
		hasBeenClicked,
		setHasBeenClicked,
		modalIsOpen,
		setModalIsOpen,
	};

	return (
		<globalContext.Provider value={context}>{children}</globalContext.Provider>
	);
};

export default GlobalContextProvider;

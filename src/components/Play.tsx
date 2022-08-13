import { FC, useContext } from 'react';
import { globalContext } from '../context/GlobalContext';
import { originalPlays } from '../enums/originalPlays';

interface Props {
	backgroundICon: string;
	playType: originalPlays;
}

const Play: FC<Props> = props => {
	const { setUserPlay, setHasBeenClicked } = useContext(globalContext);

	return (
		<div
			className={`play ${
				props.playType === originalPlays.PAPER
					? 'play__paper'
					: props.playType === originalPlays.ROCK
					? 'play__rock'
					: props.playType === originalPlays.SCISSORS
					? 'play__scissors'
					: ''
			}`}
			onClick={() => {
				setUserPlay(props.playType);
				setHasBeenClicked(prev => !prev);
			}}
		>
			{props.backgroundICon && (
				<img
					src={props.backgroundICon}
					className='play__background--icon'
					alt='background icon'
				/>
			)}
		</div>
	);
};

export default Play;

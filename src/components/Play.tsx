import { FC, useContext } from 'react';
import { userPlayContext } from '../App';
import { Plays } from '../enums/Plays';

interface Props {
	backgroundICon: string;
	playType: Plays;
}

const Play: FC<Props> = props => {
	const { setUserPlay, setHasBeenClicked } = useContext(userPlayContext);

	return (
		<div
			className={`play ${
				props.playType === Plays.PAPER
					? 'play__paper'
					: props.playType === Plays.ROCK
					? 'play__rock'
					: props.playType === Plays.SCISSORS
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
